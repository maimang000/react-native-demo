import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';

import Navigator from './RootRouter'
import {_scaleWidth,_scaleHeight,_fontScale} from './src/common/screensize.js'

//字体大小不跟随系统
var render = Text.prototype.render
// 重写render方法
Text.prototype.render = function() {
    let text = render.apply(this, arguments);
    return React.cloneElement(text, {
        allowFontScaling: true
    })
    
}

export default class App extends Component {
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={500*_scaleWidth}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                      <Text>DrawerLayoutAndroid</Text>
                                      <Text>侧边栏，抽屉</Text>
                                    </View>}>
        <Navigator />
      </DrawerLayoutAndroid>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
