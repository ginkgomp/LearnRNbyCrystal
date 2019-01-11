/*
 * @Author: wenwen sun
 * @Date: 2019-01-11 16:08:08
 * @Last Modified by: wenwen sun
 * @Last Modified time: 2019-01-11 17:12:42
 */


import { AsyncStorage } from 'react-native';
//import five images
let mood1 = require('./image/WechatIMG1.jpeg');
let mood2 = require('./image/WechatIMG2.jpeg');
let mood3 = require('./image/WechatIMG3.jpeg');
let mood4 = require('./image/WechatIMG4.jpeg');
let mood5 = require('./image/WechatIMG5.jpeg');

export default class DataHandler {

    saveDiary() {
        return new Promise(
            function (resolve, reject) {
                AsyncStorage.setItem('','')
                    .then(


                    )
                    .catch(
                        (error) => {
                            console.log('Saving failed.' + error.message);
                        }
                    );

            }
        )
    }
}