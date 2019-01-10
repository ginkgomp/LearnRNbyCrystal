import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';
import MCV from './commonvariable';

export default class DiaryWriter extends Component{

    constructor(Props) {
        super(Porps);

        this.diaryTitle = null;
        this.diaryBody = null;
        this.moodCode = 0;
        this.state = {
            moodText: '请选择心情'

        };

        this.bindAllFunctions();
}

    //bind all functions with this
    bindAllFunctions() {
        this.returnPressed = this.returnPressed.bind(this);
        this.selectMood = this.selectMood.bind(this);
    }

    returnPressed() {
        Alert.alert(
            '请确认',
            '你确定要退回日记列表吗？',
            [
                { text: '确定', onPress:this.props.returnToList },
                { text: '取消' }
            ]
        );
    }

    //switch diary mood pic
    selectMood() {
        let tempString;
        if (this.moodCode === 5) this.moodCode = 1;
        else {
            this.moodCode = this.moodCode + 1;
        }
        switch (this.moodCode) {
            case 1:
                tempString = '现在的心情： 平静';
                break;
            case 2:
                tempString = '现在的心情： 愤怒';
                break;
            case 3:
                tempString = '现在的心情：悲伤';
                break;
            case 4:
                tempString = '现在的心情：高兴';
                break;
            case 5:
                tempString = '现在的心情：痛苦';
                break;
        }
        this.setState(() => {
            return {
                moodText: tempString
            };
        });
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
                        <Text style={MCV.longButton}>{this.mood}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.saveDiary(this.moodCode,this.diaryTitle,this.diaryBody)}>
                        <Text style={MCV.smallButton}>保存</Text>
                    </TouchableOpacity>
                </View>
                <TextInput style={MCV.titleInputStyle} placeholder={'写个日记标题吧'} onChangeText={this.diaryTitle} />
                <TextInput style={MCV.diaryBodyStyle} multiline={true} placeholder={'日记正文请在此输入'} onChangeText={this.diaryBody} />
            </View>
        );
    }
}