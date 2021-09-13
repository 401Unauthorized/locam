class Status {
    static info(type) {
        switch (type) {
            case 'get':
                return { 'system': { 'get_sysinfo': {} } };
            case 'set':
            default:
                return null;
        }
    }

    static card(type) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.sdCard': { 'get_sd_card_state': {} } };
            case 'set':
            default:
                return null;
        }
    }

    static cardEnc(type) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.sdCard': { 'get_sd_enc_config': {} } };
            case 'set':
            default:
                return null;
        }
    }

    static cloud(type) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.cloud': { 'get_info': {} } };
            case 'set':
            default:
                return null;
        }
    }

    static time(type) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.dateTime': { 'get_status': {} } };
            case 'set':
            default:
                return null;
        }
    }

    static presets(type) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.ptz': { 'get_all_preset': {} } };
            case 'set':
            default:
                return null;
        }
    }

    static vod(type, playerId) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.vod': { 'get_vod_occupied_state': { 'player_id': playerId } } };
            case 'set':
            default:
                return null;
        }
    }

}

module.exports = Status;
