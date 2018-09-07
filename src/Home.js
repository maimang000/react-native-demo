import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {_scaleHeight,_fontScale} from './common/screensize.js'
export default class Home extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:40*_fontScale}}>{_fontScale} Home（已适配）</Text>
        <Text style={{fontSize:40}}> Home（未适配）</Text>
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
