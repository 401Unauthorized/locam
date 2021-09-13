const { name, version } = require('../../../package.json');

module.exports = {
    metadata: {
        package: name,
        version
    },
    camera: {
        ip: '127.0.0.1',
        port: 9999,
        name: 'camera',
        source: '8a2d067d-07fa-49b9-9289-d9f694f709b4'
    },
    auth: {
        username: '',
        password: ''
    }
};
