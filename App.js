
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Ball from "./Ball"
import Draggable from './Draggable'
import Screen from "./Screen"
import Grant from './Grant'
import Pan from "./Pan"
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <Grant/>
        <Pan/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#F5FCFF',
    }
});
