/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
//import {StyleSheet, View, Text, Clipboard} from 'react-native';
import DiaryList  from './DiaryList';
import DiaryReader from './DiaryReader';
import DiaryWriter from './DiaryWriter';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      uiCode: 1,
      diaryMood: null,
      diaryTitle: '读取中。。。',
      diaryTime: '读取中。。。',
      diaryBody: '读取中。。。'

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

  }


  searchKeyword() {

  }

  //if user press '写日记' button
  writeDiary() {
    this.setState({

      uiCode: 3

    });
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

  }

  nextDiary() {

  }

  saveDiary(moodCode,diaryTitle,diaryBody) {

  }

  showDiaryList() {
    return (
      <DiaryList writeDiary={this.writeDiary} diaryMood={this.state.diaryMood}
        diaryTitle={this.state.diaryTitle} diaryTime={this.state.diaryTime}
        selectListItem={this.selectListItem}/>
    );
  }

  showDiaryReader() {
    return (
      <DiaryReader returnToList={this.returnToList} prevDiary={this.prevDiary} nextDiary={this.nextDiary}
        diaryMood={this.state.diaryMood} diaryTitle={this.state.diaryTitle} diaryTime={this.state.diaryTime} diaryBody={this.state.diaryBody}/>
    );
  }

  showDiaryWriter() {
    return (
      <DiaryWriter returnToList={this.returnToList} />
    );
  }


  render() {

    if(this.state.uiCode === 1) return this.showDiaryList();
    if(this.state.uiCode === 2) return this.showDiaryReader();
    if(this.state.uiCode === 3) return this.showDiaryWriter();
  }

}





