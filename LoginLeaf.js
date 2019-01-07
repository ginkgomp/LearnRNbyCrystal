/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,TextInput,Alert} from 'react-native';

let widthOfMargin = Dimensions.get('window').width*0.05;

type Props = {};
export default class LoginLeaf extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      inputedNum: '',
      inputedPW:""
    };
    this.updatePW = this.updatePW.bind(this);
    this.jumpToWaiting = this.jumpToWaiting.bind(this);
  }

  updateNum= (newText) => {
    this.setState((state) => {
      return {
        inputedNum: newText,
      };
    });
  }

  updatePW(newText){
    this.setState(() => {
      return{
        inputedPW: newText,
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'} onChangeText={this.updateNum}/>
        <Text style={styles.textPromptStyle}>您输入的手机号为：{this.state.inputedNum}</Text>
        <TextInput style={styles.textInputStyle} placeholder={'请输入密码'} secureTextEntry={true} onChangeText={this.updatePW}/>
        <Text style={styles.bigTextPrompt} onPress={()=>this.userPressConfirm()}>确定</Text>
        <Text style={styles.bigTextPrompt} onPress={()=>this.userPressAddressBook()}>通讯录</Text>
      </View>
    );
  }

  userPressConfirm(){
     /*this.props.onLoginPressed(this.state.inputedNum,this.state.inputedPW); */

    Alert.alert(
      '提示',
      '确定使用' + this.state.inputedNum + '号码登录吗？',
      [
        { text: 'cancel', onPress: (() => {}), style: 'cancel' },
        { text: 'ok', onPress: this.jumpToWaiting }
      ]
    );
  }
  jumpToWaiting() {
    this.props.onLoginPressed(this.state.inputedNum, this.state.inputedPW);
  }

  userPressAddressBook(){

  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInputStyle:{
    margin:widthOfMargin,
    backgroundColor:'gray',
    fontSize:20
  },
  textPromptStyle: {
    margin:widthOfMargin,
    backgroundColor:'gray',
    color:'white',
    textAlign:'center',
    fontSize:30
  }
});
