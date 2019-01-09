/*
 * @Author: wenwen sun
 * @Date: 2019-01-07 16:08:18
 * @Last Modified by: wenwen sun
 * @Last Modified time: 2019-01-09 16:40:41
 */


import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
let puppy1 = require('./image/WechatIMG1.jpeg');
import MCV from './commonvariable';


export default class DiaryList extends Component{

    constructor(props) {
        super(props);
        this.updateSearchKeyword = this.updateSearchKeyword.bind(this);
    }
    updateSearchKeyword(newWord) {
        this.props.searchKeyWord(newWord);
    }

    render() {
        return (
            <View style={MCV.container}>
                <StatusBar hidden={true} />
                <View style={MCV.firstRow}>
                    <View style={{ borderWidth: 1 }}>
                        <TextInput autoCapitalize="none" placeholder='输入搜索关键字' clearButtonMode="while-editing" onChangeText={this.updateSearchKeyword} style={MCV.searchBarTextInput} />
                    </View>
                    <TouchableOpacity onPress={this.props.writeDiary}>
                        <Text style={MCV.middleButton}>写日记</Text>
                    </TouchableOpacity>
                </View>
                <View style={MCV.diaryAbstractList}>
                    <View style={MCV.secondRow}>
                        <Image style={MCV.moodStyle} source={this.props.diaryListMood} />
                        <View style={MCV.subViewInReader}>
                            <TouchableOpacity onPress={this.props.selectListItem}>
                                <Text style={MCV.textInReader}>{this.props.diaryListTitle}</Text>
                            </TouchableOpacity>
                            <Text style={MCV.textInReader}>{this.props.diaryListTime}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

