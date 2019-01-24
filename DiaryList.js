/*
 * @Author: wenwen sun
 * @Date: 2019-01-07 16:08:18
 * @Last Modified by: wenwen sun
 * @Last Modified time: 2019-01-24 10:09:07
 */
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, ListView } from 'react-native';
let puppy1 = require('./image/WechatIMG1.jpeg');
import MCV from './commonvariable';
export default class DiaryList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            diaryListDataSource: new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => {
                    oldRow !== newRow;
                }
            })
        }
        this.updateSearchKeyword = this.updateSearchKeyword.bind(this);
        this.renderListItem = this.renderListItem.bind(this);
    }
    componentWillMount() {
        if (this.props.diaryList === null) return;
        this.setState({
            diaryListDataSource: this.state.diaryListDataSource.cloneWithRows(this.props.diaryList)
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            diaryListDataSource: this.state.diaryListDataSource.cloneWithRows(nextProps.diaryList)
        });
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
                {
                    (
                        (this.props.diaryList.length !== 0) ?
                            (
                                <ListView dataSource={this.state.diaryListDataSource} renderRow={this.renderListItem}></ListView>
                            ) : (
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18 }}>您还没有写日记。</Text>
                                </View>
                            )
                    )
                }
            </View>
        );
    }

    renderListItem(log, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={() => this.props.selectListItem(rowID)}>
                <View style={MCV.secondRow}>
                    <Image style={MCV.moodStyle} source={log.mood} />
                    <View style={MCV.subViewInReader}>
                        <TouchableOpacity onPress={this.props.selectListItem}>
                            <Text style={MCV.textInReader}>{log.title}</Text>
                        </TouchableOpacity>
                        <Text style={MCV.textInReader}>{log.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
          );
        }


}
