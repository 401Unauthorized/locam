<div align="center">
  <h3></h3>  
  <img alt="Locam" src="./resources/logo.png" />
  <h3>A library for local control of Kasa Smart cameras.</h3>
</div>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D12.0.0-blue.svg" />
  <a href="https://github.com/401unauthorized/locam#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/401unauthorized/locam/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/401unauthorized/locam/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/401unauthorized/locam" />
  </a>
  <a href="https://twitter.com/stephenmendez_" target="_blank">
    <img alt="Twitter: stephenmendez_" src="https://img.shields.io/twitter/follow/stephenmendez_.svg?style=social" />
  </a>
  <a href="https://paypal.me/stephenmendez401" target="_blank">
    <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" alt="PayPal" />
  </a>
</p>

## 💾 Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

`$ npm i -S locam`

## 🔌 Quick Start

```javascript
const Camera = require('locam');

const c = new Camera({
    auth: {
        username: process.env.USERNAME, 
        password: process.env.PASSWORD
    },
    camera: {
        ip: '10.0.0.2',
        port: 10443,
        name: 'Camera_Name'
    },
    logging: true
});

// Get Camera Info
c.send(c.Status.info('get')).then(d => {
    console.log(d);
}).catch(err => {
    console.error(error);
});

// Move to Preset 2
c.send(c.Actions.preset('set', 2)).then(d => {
    console.log(d);
}).catch(err => {
    console.error(error);
});

// Enable Motion Tracking
c.send(c.Settings.motionTracking('set', true)).then(d => {
    console.log(d);
}).catch(err => {
    console.error(error);
});

// Get Night Vision Setting
c.send(c.Settings.nightVision('get')).then(d => {
    console.log(d);
}).catch(err => {
    console.error(error);
});

// --- Alternative Structure ---
// Define command once as vars and use vars in code
const nightVisionOff = c.Settings.nightVision('set', 'day');
const disableMotionTracking = c.Settings.motionTracking('set', false);

// ...
await c.send(nightVisionOff);
// ...
await c.send(disableMotionTracking);
// ...
```

## 🔮 Features

- Provides access to the majority of functionality and settings
- Can send additional commands that are not included in this library
- Easy integration into other projects (custom dashboards, automations, monitoring, logging, etc)

## 👓 Transparency

- Should not be considered 'production ready' or used in critical implementations
- Subject to unpredictable changes which can break this implementation without notice
- Some [security concerns & known vulnerabilities](https://github.com/401unauthorized/locam/blob/master/SECURITY.md) may exist and should be reviewed prior to using the package

## 🛠 Setup & Getting Started

### Authentication

> The current authentication approach used has some [security concerns](https://github.com/401unauthorized/locam/blob/master/SECURITY.md) which should be reviewed and acknowledged.

The current implementation relies generating a token based on the `username` & `password` used for the Kasa Smart app.

It is imperative to store the values somewhere secure but accessible by your code (see [env.js](#envjs-optional) or [.env](#env-optional) sections for general ideas)

### env.js (optional)

This file may be created to store persistant environmental variables.

This file must be added `.gitignore` & never published. See [security concerns](https://github.com/401unauthorized/locam/blob/master/SECURITY.md) for more details.

Example of storing information in this file:

```javascript
module.exports = { 
  username: 'user',
  password: 'pass'
}
```

Example of getting information from this file:

```javascript
const {username, password} = require('./env.js');
console.log(username, password);
```

### .env (optional)

This is a commonly used way to store persistant environmental variables.

In your code, you can use the [dotenv](https://www.npmjs.com/package/dotenv) package to access the stored values at runtime.

This file must be added `.gitignore` & never published. See [security concerns](https://github.com/401unauthorized/locam/blob/master/SECURITY.md) for more details.

Example of storing information in this file:

```BASH
USERNAME=user
PASSWORD=pass
```

Example of getting information from this file:

```javascript
require('dotenv').config()
console.log(process.env.USERNAME, process.env.PASSWORD);
```

## 💡 Methods

### Settings (`camera.Settings.<func()>`)

#### `power(type, enable)`

- Get or set the state of the camera power
- *type*: `'get'` or `'set'`
- *enable*: bool

#### `recordVideo(type, enable)`

- Get or set the state of the local 24/7 recording
- *type*: `'get'` or `'set'`
- *enable*: bool

#### `detectMotion(type, enable)`

- Get or set the state of motion detection
- *type*: `'get'` or `'set'`
- *enable*: bool

#### `detectMotionSensitivity(type, sensitivity)`

- Get or set the level the sensitivity of motion detection
- *type*: `'get'` or `'set'`
- *sensitivity*: `'low'`, `'medium'`, `'high'`

#### `detectMotionTime(type, dayTime, nightTime)`

- Get or set the state of min duration of motion required
- *type*: `'get'` or `'set'`
- *dayTime*: integer 
  - milliseconds
- *nightTime*: integer
  - milliseconds

#### `detectBabyCry(type, enable)`

- Get or set the state of baby crying detection
- *type*: `'get'` or `'set'`
- *enable*: bool

#### `detectPerson(type, enable)`

- Get or set the state of person detection
- *type*: `'get'` or `'set'`
- *enable*: bool

#### `recordAudio(type, enable)`

- Get or set the state of audio recording
- *type*: `'get'` or `'set'`
- *enable*: bool

#### `detectAudio(type, enable)`

- Get or set the state of audio detection
- *type*: `'get'` or `'set'`
- *enable*: bool

#### `detectAudioSensitivity(type, sensitivity)`

- Get or set the level the sensitivity of audio detection
- *type*: `'get'` or `'set'`
- *sensitivity*: `'low'`, `'medium'`, `'high'`

#### `motionTracking(type, enable)`

- Get or set the state of motion tracking
- *type*: `'get'` or `'set'`
- *enable*: bool

#### `patrol(type, enable)`

- Get or set the state of camera patrolling
- *type*: `'get'` or `'set'`
- *enable*: bool

#### `format(type)`

- Format the SD card
- *type*: `'set'`

#### `resolution(type, resolution)`

- Get or set the resolution
- *type*: `'get'` or `'set'`
- *resolution*: `'2560x1440'`, `'1920x1080'`, `'1280x720'`

#### `rotation(type, degree)`

- Get or set the state of image rotation
- *type*: `'get'` or `'set'`
- *degree*: `0` or `180`

#### `nightVision(type, state)`

- Get or set the state of infrared lights
- *type*: `'get'` or `'set'`
- *state*: `'auto'`, `'day'`, `'night'`
  - day = always off
  - night = always on

#### `statusLED(type, enable)`

- Get or set the state of the camera LED
- *type*: `'get'` or `'set'`
- *enable*: bool

#### `doNotDisturb(type, enable)`

- Get or set the state of do not disturb
- *type*: `'get'` or `'set'`
- *enable*: bool

#### `time(type, time)`

- Get or set the time of the camera 
- *type*: `'get'` or `'set'`
- *time*: integer
  - epoch time

#### `timezone(type, timezone, area)`

- Get or set the timezone of the camera
- *type*: `'get'` or `'set'`
- *timezone*: string
  - `'UTC-05:00'`
- *area*: string
  - `'America/New_York'`

### Actions (`camera.Actions.<func()>`)

#### `preset(type, num)`

- Move camera to a preset location
- *type*: `'set'`
- *num*: `1`, `2`, `3`, `4`

#### `move(type, dir, speed)`

- Move the camera in a direction
- *type*: `'set'`
- *dir*: `'left'`, `'up'`, `'right'`, `'down'`
- *speed*: integer

#### `position(type, x, y)`

- Get or set the current position of the camera
- *type*: `'get'` or `'set'`
- *x*: integer
- *y*: integer

#### `stop(type)`

- Stop the camera from moving
- *type*: `'set'`

#### `stream(type, view)`
> Not implemented yet

- Get the live stream of the camera
- Display in a window or return the buffer
- *type*: `'get'` 
- *view*: boolean

#### `streamToFile(type, seconds)`
> Not implemented yet

- Save the live stream of the camera to a file
- *type*: `'get'` 
- *seconds*: integer

#### `streamToStream(type, format)`
> Not implemented yet

- Restream the live stream of the camera in another format
- *type*: `'get'` 
- *format*: `'hls'` or `'rtmp'`

#### `vodStream(type, view)`
> Not implemented yet

- Get the VOD recording stream of the camera
- Display in a window or return the buffer
- *type*: `'get'` 
- *view*: boolean

#### `speak(type, audioStream)`
> Not implemented yet

- Send an audio stream to the camera speaker
- *type*: `'set'` 
- *audioStream*: buffer

#### `snapshot(type)`

- Get the link to the latest camera thumbnail image
- *type*: `'get'`

#### `events(type, startTime, endTime)`

- Get the events detected by the camera within the time window specified
- *type*: `'get'`
- *startTime*: integer
  - epoch time
- *endTime*: integer
  - epoch time

### Status (`camera.Status.<func()>`)
#### `info(type)`

- Generic information about the camera
- *type*: `'get'`

#### `card(type)`

- Information about the SD card
- *type*: `'get'`

#### `cardEnc(type)`

- Information about the SD card encryption
- *type*: `'get'`

#### `cloud(type)`

- Information about the connection to the cloud servers
- *type*: `'get'`

#### `time(type)`

- Complete time configuration of the device
- *type*: `'get'`

#### `presets(type)`

- List of stored preset locations
- *type*: `'get'`

#### `vod(type, playerId)`

- Get basic information about the VOD status
- *type*: `'get'`
- *playerId*: `'abc123'`


## 👤 Author

 **Stephen Mendez**

- Website: https://www.stephenmendez.dev
- Twitter: [@stephenmendez\_](https://twitter.com/stephenmendez_)
- Github: [@401unauthorized](https://github.com/401unauthorized)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/401unauthorized/locam/issues). You can also take a look at the [contributing guide](https://github.com/401unauthorized/locam/blob/master/CONTRIBUTING.md).

## 😃 Show your support

Give a ⭐️ if this project helped you!

Consider making a donation of any amount!

<a href="https://paypal.me/stephenmendez401" target="_blank">
    <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_200x51.png" alt="PayPal" />
</a>

## 📝 License

Copyright © 2021 Stephen Mendez<br />
This project is [MIT](https://github.com/401unauthorized/locam/blob/master/LICENSE) licensed.

---
[Kasa](https://www.kasasmart.com/us) is a registered trademark of TP-LINK Research America Corporation.

_Part of this README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

<img src="https://locam.goatcounter.com/count?p=/readme">
