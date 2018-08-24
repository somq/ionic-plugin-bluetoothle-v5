# Ionic Native **v5** plugin wrapper for cordova-plugin-bluetoothle

# ionic-plugin-bluetoothle-v5

> [Ionic Native](https://github.com/ionic-team/ionic-native) **v5** plugin wrapper for [cordova-plugin-bluetoothle](https://github.com/randdusing/cordova-plugin-bluetoothle)



## Table of Contents

* [Install](#install)
* [Install from scratch](#install-from-scratch)
* [Usage](#usage)
* [Troubleshoot](#troubleshoot)
* [Development](#development)
* [Versions](#versions)
* [License](#license)


## Install

```sh
npm install ionic-plugin-bluetoothle --save
ionic cordova plugin add cordova-plugin-bluetoothle
```

## Usage

app.module.ts
```js

import { BluetoothLE } from '@ionic-native/bluetooth-le';

@NgModule({
  ...
  providers: [
    ...
    BluetoothLE
  ]
})

```

home.ts
```js

import { Platform } from 'ionic-angular';
import { BluetoothLE } from '@ionic-native/bluetooth-le';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public bluetoothle: BluetoothLE, public plt: Platform) {


    this.plt.ready().then((readySource) => {

      console.log('Platform ready from', readySource);

      this.bluetoothle.initialize().then(ble => {
        console.log('ble', ble.status) // logs 'enabled'
      });

    });
  }
}

```

Informations about methods can be found on the original plugin repository: 
[randdusing/cordova-plugin-bluetoothle
](https://github.com/randdusing/cordova-plugin-bluetoothle/blob/master/readme.md)

## Troubleshoot

```sh
Cannot find module '@ionic-native/bluetooth-le'.
```

run this cmd to re-copy the file to the node_modules/@ionic-native folder
```sh
node node_modules\ionic-plugin-bluetoothle\install.js
```
---

```sh
plugin_not_installed
```

reinstal the bluetoothle plugin
```sh
ionic cordova plugin add cordova-plugin-bluetoothle
```


## Development

Take a look at the [development repository](https://github.com/somq/ionic-plugin-bluetoothle-dev)

## Original doc

You can find the doc on the original plugin repository: 
[randdusing/cordova-plugin-bluetoothle
](https://github.com/randdusing/cordova-plugin-bluetoothle/blob/master/readme.md)

## Versions

Known versions @ this development stage:

* Ionic version: "4.5.1"
* Ionic Native version: "3.9.2"
* cordova-plugin-bluetoothle: "4.4.3"

## Credits
* [sublimator](https://github.com/sublimator)


## License

MIT
