/*
 * @Author: wenwen sun
 * @Date: 2019-01-07 16:08:18
 * @Last Modified by: wenwen sun
 * @Last Modified time: 2019-01-07 16:25:27
 */


import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
let puppy1 = require('./image/WechatIMG1.jpeg');
import MCV from './commonvariable';


export default class DiaryList extends Component{
    updateSearchKeyword(newWord) {

    }

    render() {
        return (
            <View style={MCV.container}>
                <StatusBar hidden={true} />
                <View style={MCV.firstRow}>
                    <View style={{ borderWidth: 1 }}>
                        <TextInput autoCapitalize="none" placeholder='输入搜索关键字' clearButtonMode="while-editing" onChangeText={this.updateSearchKeyword} style={MCV.searchBarTextInput} />
                    </View>
                    <TouchableOpacity>
                        <Text style={MCV.middleButton}>写日记</Text>
                    </TouchableOpacity>
                </View>
                <View style={MCV.diaryAbstractList}>
                    <View style={MCV.secondRow}>
                        <Image style={MCV.moodStyle} source={puppy1} />
                        <View style={MCV.subViewInReader}>
                            <TouchableOpacity onPress={this.props.selectListItem}>
                                <Text style={MCV.textInReader}>列表标题</Text>
                            </TouchableOpacity>
                            <Text style={MCV.textInReader}>列表时间</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

