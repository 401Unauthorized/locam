const Actions = require('../actions');
const Status = require('../status');
const Settings = require('../settings');
const Transport = require('../transport');
const { defaultConf } = require('../models');

class Camera {
    constructor(opts) {
        this.Actions = Actions;
        this.Status = Status;
        this.Settings = Settings;

        const authOpts = Object.assign(defaultConf.auth, opts.auth);
        this.cameraOpts = Object.assign(defaultConf.camera, opts.camera, { token: this.#generateToken(authOpts) });

        this.transport = new Transport(this.cameraOpts);

        if('logging' in opts && opts.logging){
            console.log('Configuration:', { ...this.cameraOpts, ...defaultConf.metadata });
        }
    }

    #generateToken(authOpts) {
        const p = Buffer.from(authOpts.password).toString('base64');
        return Buffer.from(`${authOpts.username}:${p}`).toString('base64');
    }

    send(data) {
        if (data === null) {
            throw new Error('Invalid Command');
        }
        return this.transport.fetch(data);
    }
}

module.exports = Camera;
