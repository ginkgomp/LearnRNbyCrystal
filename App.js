/*
 * @Author: wenwen sun
 * @Date: 2019-01-15 16:33:38
 * @Last Modified by: wenwen sun
 * @Last Modified time: 2019-01-15 16:34:03
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, {Component} from 'react';
//import {StyleSheet, View, Text, Clipboard} from 'react-native';
import { Alert } from 'react-native';
import DiaryList  from './DiaryList';
import DiaryReader from './DiaryReader';
import DiaryWriter from './DiaryWriter';
import DataHandler from './DataHandler';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      uiCode: 1,
      diaryMood: null,
      diaryTitle: '读取中。。。',
      diaryTime: '读取中。。。',
      diaryBody: '读取中。。。',
      diaryIndex: 0
    };

    this.bindAllFunctions();

  }

  bindAllFunctions() {
    this.searchKeyword = this.searchKeyword.bind(this);
    this.writeDiary = this.writeDiary.bind(this);
    this.selectListItem = this.selectListItem.bind(this);
    this.returnToList = this.returnToList.bind(this);
    this.prevDiary = this.prevDiary.bind(this);
    this.nextDiary = this.nextDiary.bind(this);
    this.saveDiary = this.saveDiary.bind(this);
    this.showAllDiaries = this.showAllDiaries.bind(this);

  }


  searchKeyword() {

  }

  //if user press '写日记' button
  writeDiary() {
    this.setState({

      uiCode: 3

    });
  }


  //show the list of all diaries
  showAllDiaries() {

    //DataHandler.diaryStoreList

  }


  //if user select one of diary title
  selectListItem() {
    this.setState({
      uiCode:2
    })
  }


  returnToList() {
    this.setState({
        uiCode: 1


    });
   }


  prevDiary() {
    DataHandler.getPrevDiary(this.state.diaryIndex)
      .then(
        (res) => {
          if (res === null) {
            Alert.alert(
              '提示',
              '当前已为第一篇日记了',
              [
                { text: '确定', onPress: this.props.returnToList },
                { text: '取消' }
              ]
            );
          } else {
            this.setState(res);
          }
        }
    ).catch(
      (err) => {
        console.log(err);
        }

      );

  }

  nextDiary() {
    DataHandler.getNextDiary(this.state.diaryIndex)
      .then(
        (res) => {
          if (res === null) {
            Alert.alert(
              '提示',
              '当前已为最新一篇日记了',
              [
                { text: '确定', onPress: this.props.returnToList },
                { text: '取消' }
              ]
            );
          } else {
            this.setState(res);
          }
        }
    ).catch(
      (err) => {
        console.log(err);
        }
      );

  }

  saveDiary(moodCode, diaryTitle, diaryBody) {
    DataHandler.saveDiary(moodCode, diaryTitle, diaryBody)
      .then(
        (res) => {
          this.setState(res);
        }

      ).catch(
        (err) => {
          console.log(err);
        }
      );

  }

  showDiaryList() {
    return (
      <DiaryList writeDiary={this.writeDiary} diaryMood={this.state.diaryMood}
        diaryTitle={this.state.diaryTitle} diaryTime={this.state.diaryTime}
        selectListItem={this.selectListItem} diaryIndex={this.state.diaryIndex}/>
    );
  }

  showDiaryReader() {
    return (
      <DiaryReader returnToList={this.returnToList} prevDiary={this.prevDiary} nextDiary={this.nextDiary}
        diaryMood={this.state.diaryMood} diaryTitle={this.state.diaryTitle} diaryTime={this.state.diaryTime} diaryBody={this.state.diaryBody}
        diaryIndex={this.state.diaryIndex}/>
    );
  }

  showDiaryWriter() {
    return (
      <DiaryWriter returnToList={this.returnToList} saveDiary={this.saveDiary} />
    );
  }


  render() {

    if(this.state.uiCode === 1) return this.showDiaryList();
    if(this.state.uiCode === 2) return this.showDiaryReader();
    if(this.state.uiCode === 3) return this.showDiaryWriter();
  }

}





