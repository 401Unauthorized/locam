const needle = require('needle');

class Transport {
    #opts

    constructor(opts) {
        this.#opts = opts;
    }

    #encrypt(str) {
        let key = 171;
        let b = Buffer.alloc(0);
        for (let i of str) {
            const a = key ^ i.charCodeAt(0);
            key = a;
            b = Buffer.concat([b, Buffer.from([a])]);
        }
        return b;
    }

    #decrypt(str) {
        let key = 171;
        let result = '';
        for (let i of str) {
            const a = key ^ i;
            key = i;
            result += String.fromCharCode(a);
        }
        return result;
    }

    #encode(data) {
        return Buffer.from(data);
    }

    #decode(data) {
        return Buffer.from(data, 'base64');
    }

    #parse(data) {
        const d = this.#decode(data);
        const r = this.#decrypt(d);
        return JSON.parse(r);
    }

    #stringifyData(data) {
        const p = { context: { source: this.#opts.source }, ...data };
        const s = JSON.stringify(p);
        const e = this.#encrypt(s);
        const b = this.#encode(e).toString('base64');
        const u = encodeURIComponent(b);
        return u;
    }

    fetch(command) {
        const str = this.#stringifyData(command);
        return needle('post', `https://${this.#opts.ip}:${this.#opts.port}/data/LINKIE.json`,
            `content=${str}`,
            {
                compressed: true,
                headers: {
                    'Host': `${this.#opts.ip}:${this.#opts.port}`,
                    'Authorization': `Basic ${this.#opts.token}`
                },
                rejectUnauthorized: false
            })
            .then(response => this.#parse(response.body));
    }
}

module.exports = Transport;
