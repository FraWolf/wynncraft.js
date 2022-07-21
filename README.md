# wynncraft.js
API for take WynnCraft informations! :)

## NPM
https://nodei.co/npm/wynncraft.js/

## GitHub
https://github.com/FraWolf/wynncraft.js

## getItem:
```javascript
const WynnCraftJS = require('wynncraft.js');
const WC = new WynnCraftJS();

  let item = "< item name >";

WC.getItem(item).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
```

## getPlayerStats:
```javascript
const WynnCraftJS = require('wynncraft.js');
const WC = new WynnCraftJS();

  let nickname = "< MC nickname >";

WC.getPlayerStats(nickname).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
```

## Installation
```
npm i wynncraft.js --save
```

If you need support write to Fra#4142 on Discord! :)
 
