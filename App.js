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

  showDiaryList() {
    return (
      <DiaryList />
    );
  }

  showDiaryReader() {
    return (
      <DiaryReader />
    );
  }

  showDiaryWriter() {
    return (
      <DiaryWriter />
    )
  }


  render() {

    //return this.showDiaryList();
    //return this.showDiaryReader();
    return this.showDiaryWriter();
  }

}





