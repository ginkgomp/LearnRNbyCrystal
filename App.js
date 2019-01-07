/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Clipboard} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { textFromClipboard: '' };
    this.pasteFromClipboard = this.pasteFromClipboard.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    //this.onTextPress = this.onTextPress.bind(this);
}

  pasteFromClipboard() {
    Clipboard.getString().then(
      (textFromClipboard) => {
        this.setState({ textFromClipboard });
      }
    ).catch(
      (error) => {
        console.log('error');
      }
    )
  }

  copyToClipboard() {
    Clipboard.setString('ABCD');
  }



  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        {this.state.textFromClipboard}
        </Text>
        <Text style={styles.instructions} onPress={this.copyToClipboard}>
        Press to Copy.
        </Text>
        <Text style={styles.instructions} onPress={this.pasteFromClipboard}>
        Press to Paste.
        </Text>

      </View>
    );
  }

}


let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'grey',
    marginBottom: 15,
    backgroundColor: 'green',
    fontSize:30
  }
});
