/*
 * @Author: wenwen sun
 * @Date: 2018-12-06 14:53:22
 * @Last Modified by: wenwen sun
 * @Last Modified time: 2018-12-06 17:10:28
 */

import React, {Component} from 'react';
import {BackHandler,Platform} from 'react-native';

import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';

export default class NaviModule extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentScene: 'Login',
            phoneNumber: '',
            userPW: ''
        };

        this.handleBackSignal = this.handleBackSignal.bind(this);
        this.onLoginPressed = this.onLoginPressed.bind(this);

    }

    onLoginPressed(aNumber, aPW){
        this.setState({
            currentScene: 'Waiting',
            phoneNumber: aNumber,
            userPW: aPW
        });
    }

    render(){
        if(this.state.currentScene === 'Login')
            return <LoginLeaf onLoginPressed = {this.onLoginPressed} />;
        else
            return(
            <WaitingLeaf phoneNumber = {this.state.phoneNumber} onGobackPressed = {this.handleBackSignal} userPW={this.state.userPW} />
            )
    }


    handleBackSignal(){
        if(this.state.currentScene === "Waiting"){
            this.setState({currentScene: 'Login'});
            return true;
        }
        return false;
    }

    componentDidMount(){
        if(Platform.OS === "android")
            BackHandler.addEventListener('hardwareBackPress',this.handleBackSignal);
    }

    componentWillUnmount(){
        if(Platform.OS === "android")
            BackHandler.removeEventListener('hardwareBackPress',this.handleBackSignal);
    }
}

