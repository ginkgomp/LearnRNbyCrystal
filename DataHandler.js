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

    saveDiary(moodCode, diaryTitle, diaryBody) {
        return new Promise((resolve, reject) => {
            let currTime = new Date(); //get current diary time
            let diaryIndex = 0;

            let newDiary = Object(); //create an object to store new created diary detail
            newDiary.title = diaryTitle;
            newDiary.body = diaryBody;
            newDiary.mood = moodCode;
            newDiary.time = currTime;
            newDiary.index = diaryIndex++;
            let diaryContent = JSON.stringify(newDiary);
            AsyncStorage.setItem(newDiary.index, diaryContent)
                .then(() => {
                    //define new diary's mood pic
                    let diaryMoodIcon;
                    switch (moodCode) {
                        case 2:
                            diaryMoodIcon = mood2;
                        case 3:
                            diaryMoodIcon = mood3;
                        case 4:
                            diaryMoodIcon = mood4;
                        case 5:
                            diaryMoodIcon = mood5;
                        default:
                            diaryMoodIcon = mood1;
                    }
                        
                    let lastDiary = {
                        uiCode: 1,
                        diaryMood: diaryMoodIcon,
                        diaryTitle: diaryTitle,
                        diaryTime: currTime,
                        diaryBody: diaryBody,
                        diaryIndex: newDiary.index
                    };

                    resolve(lastDiary);
            
                })
                .catch(
                    (error) => {
                        console.log('Saving failed.' + error.message);
                    }
                );

        });
    }


    getPrevDiary() {
        return null;
    }

    getNextDiary() {
        return null;
    }

}