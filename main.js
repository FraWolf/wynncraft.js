//
//    Created by Francesco "FraWolf" Lombardo
//              on 05/02/2018
//
const request = require('request');

module.exports = class WynnCraftJS {
  constructor() {

  }

  getItem(item) {
      return new Promise((resolve, reject) => {
          if(!item || typeof item !== 'string') return reject(new TypeError('Invalid item'));
          let endpoint = `https://api.wynncraft.com/public_api.php?action=itemDB&search=${item.toString()}`;
          request.get(endpoint, (error, response, body) => {
              if(!error && response.statusCode == '200') {
                  return resolve(JSON.parse(body));
              } else {
                  return reject(JSON.parse(body));
              }
          })
      })
  } // Fine getItem


  getPlayerStats(nickname) {
    return new Promise((resolve, reject) => {
        if(!nickname || typeof nickname !== 'string') return reject(new TypeError('Invalid nickname'));
        let endpoint = `https://api.wynncraft.com/public_api.php?action=playerStats&command=${nickname.toString()}`;
        request.get(endpoint, (error, response, body) => {
            if(!error && response.statusCode == '200') {
                return resolve(JSON.parse(body));
            } else {
                return reject(JSON.parse(body));
            }
        })
    })
} // Fine getPlayerStats


}
