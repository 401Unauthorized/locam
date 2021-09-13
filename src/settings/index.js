class Settings {
    static power(type, enable) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.switch': { get_is_enable: {} } };
            case 'set':
                const status = enable ? 'on' : 'off';
                return { 'smartlife.cam.ipcamera.switch': { set_is_enable: { value: status } } };
            default:
                return null;
        }
    }

    static recordVideo(type, enable) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.delivery': { 'get_local_clip_is_enable': {} } };
            case 'set':
                const status = enable ? 'on' : 'off';
                return { 'smartlife.cam.ipcamera.delivery': { 'set_local_clip_is_enable': { 'value': status } } };
            default:
                return null;
        }
    }

    static detectMotion(type, enable) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.motionDetect': { 'get_is_enable': {} } };
            case 'set':
                const status = enable ? 'on' : 'off';
                return { 'smartlife.cam.ipcamera.motionDetect': { 'set_is_enable': { 'value': status } } };
            default:
                return null;
        }
    }

    static detectMotionSensitivity(type, sensitivity) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.motionDetect': { 'get_sensitivity': {} } };
            case 'set':
                // low, medium, high
                return { 'smartlife.cam.ipcamera.motionDetect': { 'set_sensitivity': { 'value': sensitivity } } };
            default:
                return null;
        }
    }

    static detectMotionTime(type, dayTime, nightTime) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.motionDetect': { 'get_min_trigger_time': {} } };
            case 'set':
                // 1500, 1500
                return { 'smartlife.cam.ipcamera.motionDetect': { 'set_min_trigger_time': { 'day_mode_value': dayTime, 'night_mode_value': nightTime } } };
            default:
                return null;
        }
    }

    static detectBabyCry(type, enable) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.intelligence': { 'get_bcd_enable': {} } };
            case 'set':
                const status = enable ? 'on' : 'off';
                return { 'smartlife.cam.ipcamera.intelligence': { 'set_bcd_enable': { 'value': status } } };
            default:
                return null;
        }
    }

    static detectPerson(type, enable) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.intelligence': { 'get_pd_enable': {} } };
            case 'set':
                const status = enable ? 'on' : 'off';
                return { 'smartlife.cam.ipcamera.intelligence': { 'set_pd_enable': { 'value': status } } };
            default:
                return null;
        }
    }

    static recordAudio(type, enable) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.delivery': { 'get_clip_audio_is_enable': {} } };
            case 'set':
                const status = enable ? 'on' : 'off';
                return { 'smartlife.cam.ipcamera.delivery': { 'set_clip_audio_is_enable': { 'value': status } } };
            default:
                return null;
        }
    }

    static detectAudio(type, enable) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.soundDetect': { 'get_is_enable': {} } };
            case 'set':
                const status = enable ? 'on' : 'off';
                return { 'smartlife.cam.ipcamera.soundDetect': { 'set_is_enable': { 'value': status } } };
            default:
                return null;
        }
    }

    static detectAudioSensitivity(type, sensitivity) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.soundDetect': { 'get_sensitivity': {} } };
            case 'set':
                // low, medium, high
                return { 'smartlife.cam.ipcamera.soundDetect': { 'set_sensitivity': { 'value': sensitivity } } };
            default:
                return null;
        }
    }

    static motionTracking(type, enable) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.ptz': { 'get_ptz_tracking_is_enable': {} } };
            case 'set':
                const status = enable ? 'on' : 'off';
                return { 'smartlife.cam.ipcamera.ptz': { 'set_ptz_tracking_is_enable': { 'value': status } } };
            default:
                return null;
        }
    }

    static patrol(type, enable) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.ptz': { 'get_patrol_is_enable': {} } };
            case 'set':
                const status = enable ? 'on' : 'off';
                return { 'smartlife.cam.ipcamera.ptz': { 'set_patrol_is_enable': { 'value': status } } };
            default:
                return null;
        }
    }

    static format(type) {
        switch (type) {
            case 'get':
            default:
                return null;
            case 'set':
                return { 'smartlife.cam.ipcamera.sdCard': { 'set_format_sd_card': {} } };
        }
    }

    static resolution(type, resolution) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.videoControl': { 'get_resolution': {} } };
            case 'set':
                // 1920x1080, etc
                return { 'smartlife.cam.ipcamera.videoControl': { 'set_resolution': { 'value': resolution } } };
            default:
                return null;
        }
    }

    static rotation(type, degree) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.videoControl': { 'get_rotation_degree': {} } };
            case 'set':
                // 0, 180
                return { 'smartlife.cam.ipcamera.videoControl': { 'set_rotation_degree': { 'value': degree } } };
            default:
                return null;
        }
    }

    static nightVision(type, state) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.dayNight': { 'get_mode': {} } };
            case 'set':
                // auto, day, night
                return { 'smartlife.cam.ipcamera.dayNight': { 'set_mode': { 'value': state } } };
            default:
                return null;
        }
    }

    static statusLED(type, enable) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.led': { 'get_status': {} } };
            case 'set':
                const status = enable ? 'on' : 'off';
                return { 'smartlife.cam.ipcamera.led': { 'set_status': { 'value': status } } };
            default:
                return null;
        }
    }

    static doNotDisturb(type, enable) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.dndSchedule': { 'get_dnd_enable': {} } };
            case 'set':
                const status = enable ? 'on' : 'off';
                return { 'smartlife.cam.ipcamera.dndSchedule': { 'set_dnd_enable': { 'value': status } } };
            default:
                return null;
        }
    }

    static time(type, time) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.dateTime': { 'get_time': {} } };
            case 'set':
                // 1631639476
                return { 'smartlife.cam.ipcamera.dateTime': { 'set_time': { 'epoch_sec': time } } };
            default:
                return null;
        }
    }

    static timezone(type, timezone, area) {
        switch (type) {
            case 'get':
                return { 'smartlife.cam.ipcamera.dateTime': { 'get_time_zone': {} } };
            case 'set':
                // UTC-05:00, America/New_York
                return { 'smartlife.cam.ipcamera.dateTime': { 'set_time_zone': { timezone, area } } };
            default:
                return null;
        }
    }
}

module.exports = Settings;
