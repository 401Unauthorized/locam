class Actions {
    static preset(type, num) {
        switch (type) {
            case 'get':
            default:
                return null;
            case 'set':
                if (num > 4) {
                    return null;
                }
                return { 'smartlife.cam.ipcamera.ptz': { 'set_run_to_preset': { 'index': num } } };
        }
    }

    static move(type, dir, speed) {
        switch (type) {
            case 'get':
            default:
                return null;
            case 'set':
                if (['left', 'up', 'right', 'down'].indexOf(dir) === -1 || speed < 1 || speed > 10) {
                    return null;
                }
                return { 'smartlife.cam.ipcamera.ptz': { 'set_move': { 'direction': dir, 'speed': speed } } };
        }
    }

    static position(type, x, y) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.ptz': { get_position: {} } };
            case 'set':
                return { 'smartlife.cam.ipcamera.ptz': { set_target: { x, y } } };
            default:
                return null;
        }
    }

    static stop(type) {
        switch (type) {
            case 'get':
            default:
                return null;
            case 'set':
                return { 'smartlife.cam.ipcamera.ptz': { 'set_stop': {} } };
        }
    }

    static stream(type, view) {
        // TODO
        // view the stream or just return buffer
    }

    static streamToFile(type, seconds) {
        // TODO
        // store n seconds to file
    }

    static streamToStream(type, format) {
        // TODO
        // restream the stream in better format
    }

    static vodStream(type, view) {
        // TODO
        // view the stream or just return buffer
    }

    static speak(type, audioStream) {
        // TODO
        // send audio stream to camera
    }

    static snapshot(type) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.relay': { 'get_preview_snapshot': {} } };
            case 'set':
            default:
                return null;
        }
    }

    static events(type, startTime, endTime) {
        switch (type) {
            case 'get':
                if (startTime >= endTime) {
                    return null;
                }
                return { 'smartlife.cam.ipcamera.vod': { 'get_detect_zone_list': { 'start_time': startTime, 'end_time': endTime } } };
            case 'set':
            default:
                return null;
        }
    }

}

module.exports = Actions;
