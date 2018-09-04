import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';

import Navigator from './RootRouter'

export default class App extends Component<{}> {
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={200}
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
