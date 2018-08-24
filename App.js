import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {api} from './src/MainScreen.js'

export default class App extends Component{
  render() {
    return (
      <View>
        <Text>{api}</Text>
      </View>
    );
  }
}

