/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
//import {StyleSheet, View, Text, Clipboard} from 'react-native';
import  DiaryList  from "./DiaryList";


type Props = {};
export default class App extends Component<Props> {

  showDiaryList() {
    return (
      <DiaryList />
    );
  }



  render() {

    return this.showDiaryList();

  }

}





