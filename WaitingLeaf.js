/*
 * @Author: wenwen sun
 * @Date: 2018-12-07 11:19:43
 * @Last Modified by: wenwen sun
 * @Last Modified time: 2018-12-09 21:43:49
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

export default class WaitingLeaf extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.textPromptStyle}>登录使用手机号：{this.props.phoneNumber}</Text>

        <Text style={styles.textPromptStyle}>登录使用密码：{this.props.userPW} </Text>
        <Text style={styles.bigTextPrompt} onPress={()=>this.onGobackPressed()}>返回</Text>
      </View>
    );
  }

  onGobackPressed(){
      this.props.onGobackPressed();
  }
}

WaitingLeaf.propTypes = {
    phoneNumber: PropTypes.string,
    userPW: PropTypes.string
}

WaitingLeaf.defaultProps = {
    phoneNumber: '123456',
    userPW: '456123'
}


let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  textPromptStyle: {

    fontSize:20
  },

  bigTextPrompt:{
      width: 300,
      backgroundColor:'gray',
      color:'white',
      textAlign:'center',
      fontSize:60
  }
});
