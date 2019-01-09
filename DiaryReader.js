/*
 * @Author: wenwen sun
 * @Date: 2019-01-09 16:41:51
 * @Last Modified by: wenwen sun
 * @Last Modified time: 2019-01-09 16:59:19
 */

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
let puppy1 = require('./image/WechatIMG2.jpeg');
import MCV from './commonvariable';

export default class DiaryReader extends Component{

    render() {
        return (
            <View style={MCV.container}>
                <StatusBar hidden={true} />
                <View style={MCV.firstRow}>
                    <TouchableOpacity onPress={this.props.returnToList}>
                        <Text style={MCV.middleButton}>返回</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.prevDiary}>
                        <Text style={MCV.middleButton}>上一篇</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.nextDiary}>
                        <Text style={MCV.middleButton}>下一篇</Text>
                    </TouchableOpacity>
                </View>
                <View style={MCV.secondRow}>
                    <Image style={MCV.moodStyle} source={this.props.diaryMood} />
                    <View style={MCV.subViewInReader}>
                        <Text style={MCV.textInReader}>{this.props.diaryTitle}</Text>
                        <Text style={MCV.textInReader}>{this.props.diaryTime}</Text>
                    </View>
                </View>
                <TextInput style={[ MCV.diaryBodyStyle, { color: 'black' } ]} multiline={true} editable={false} value={this.props.diaryBody} />
            </View>
        );
    }
}