/*
 * @Author: wenwen sun
 * @Date: 2019-01-11 16:08:08
 * @Last Modified by: wenwen sun
 * @Last Modified time: 2019-01-15 16:21:14
 */


import { AsyncStorage } from 'react-native';
//import five images
let mood1 = require('./image/WechatIMG1.jpeg');
let mood2 = require('./image/WechatIMG2.jpeg');
let mood3 = require('./image/WechatIMG3.jpeg');
let mood4 = require('./image/WechatIMG4.jpeg');
let mood5 = require('./image/WechatIMG5.jpeg');

export default class DataHandler {



    //store diaries into list
    static diaryStoreList = [];

    static diaryIndex = 0;

    static defineMoodIcon(moodcode) {
        //define diary's mood pic
        let diaryMoodIcon;
        switch (moodcode) {
            case 2:
                diaryMoodIcon = mood2;
                break;
            case 3:
                diaryMoodIcon = mood3;
                break;
            case 4:
                diaryMoodIcon = mood4;
                break;
            case 5:
                diaryMoodIcon = mood5;
                break;
            default:
                diaryMoodIcon = mood1;
        }
        return diaryMoodIcon;
    }

   static saveDiary(moodCode, diaryTitle, diaryBody) {
        return new Promise((resolve, reject) => {
            let currTime = new Date(); //get current diary time

            let newDiary = Object(); //create an object to store new created diary detail
            newDiary.title = diaryTitle;
            newDiary.body = diaryBody;
            newDiary.mood = moodCode;
            newDiary.time = currTime.toLocaleString();
            newDiary.index = DataHandler.diaryIndex + 1;
            let diaryContent = JSON.stringify(newDiary);
            AsyncStorage.setItem(''+newDiary.index, diaryContent)
                .then(() => {

                    DataHandler.diaryIndex = newDiary.index;

                    //update store list
                    DataHandler.diaryStoreList.push(newDiary);

                    let lastDiary = {
                        uiCode: 1,
                        diaryMood: DataHandler.defineMoodIcon(moodCode),
                        diaryTitle: diaryTitle,
                        diaryTime: newDiary.time,
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


    static getPrevDiary(diaryIndex) {


        return new Promise((resolve, reject) => {

            AsyncStorage.getItem(''+(diaryIndex-1))
                .then((res) => {

                    const resJson = JSON.parse(res);

                    //console.log(resJson);

                    if (resJson.index === 0) resolve(null);

                    let prevDiary = {
                        uiCode: 2,
                        diaryMood: resJson.mood,
                        diaryTitle: resJson.title,
                        diaryTime: resJson.time,
                        diaryBody: resJson.body,
                        diaryIndex: diaryIndex-1
                    }

                    resolve(prevDiary);

                })
                .catch(
                    (error) => {
                        console.log(error.message);
                    }
                )


        });
    }

    static getNextDiary(diaryIndex) {
        return new Promise((resolve, reject) => {

            AsyncStorage.getItem(''+(diaryIndex+1))
                .then((res) => {

                    const resJson = JSON.parse(res);

                    //console.log(resJson);

                    if (resJson.index > DataHandler.diaryStoreList.length) resolve(null);

                    let prevDiary = {
                        uiCode: 2,
                        diaryMood: resJson.mood,
                        diaryTitle: resJson.title,
                        diaryTime: resJson.time,
                        diaryBody: resJson.body,
                        diaryIndex: diaryIndex+1
                    }

                    resolve(prevDiary);

                })
                .catch(
                    (error) => {
                        console.log(error.message);
                    }
                )


        });
    }

}