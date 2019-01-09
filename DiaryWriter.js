import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';
import MCV from './commonvariable';

export default class DiaryWriter extends Component{
    returnPressed() {
        Alert.alert(
            '请确认',
            '你确定要退回日记列表吗？',
            [
                { text: '确定' },
                { text: '取消' }
            ]
        );
    }

    render() {
        return (
            <View style={MCV.container}>
                <StatusBar hidden={true} />
                <View style={MCV.firstRow}>
                    <TouchableOpacity onPress={this.returnPressed}>
                        <Text style={MCV.smallButton}>返回</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.selectMood}>
                        <Text style={MCV.longButton}>某变量当前按钮文字</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={MCV.smallButton}>保存</Text>
                    </TouchableOpacity>
                </View>
                <TextInput style={MCV.titleInputStyle} placeholder={'写个日记标题吧'} />
                <TextInput style={MCV.diaryBodyStyle} multiline={true} placeholder={'日记正文请在此输入'} />
            </View>
        );
    }
}