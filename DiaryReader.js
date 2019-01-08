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
                    <TouchableOpacity>
                        <Text style={MCV.middleButton}>返回</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={MCV.middleButton}>上一篇</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={MCV.middleButton}>下一篇</Text>
                    </TouchableOpacity>
                </View>
                <View style={MCV.secondRow}>
                    <Image style={MCV.moodStyle} source={puppy1} />
                    <View style={MCV.subViewInReader}>
                        <Text style={MCV.textInReader}>日记标题：某变量</Text>
                        <Text style={MCV.textInReader}>时间：某变量</Text>
                    </View>
                </View>
                <TextInput style={[ MCV.diaryBodyStyle, { color: 'black' } ]} multiline={true} editable={false} value={'某变量记录日记正文'} />
            </View>
        );
    }
}