import React, { Component } from 'react';
import {StackNavigator,TabNavigator,TabBarBottom,DrawerNavigator} from 'react-navigation';  
import Home from './src/Home.js';
import Mine from './src/Mine.js';
import Product from './src/Product.js';

const Tab = TabNavigator(
    {
        Home:{
            screen:Home
        },
        Mine:{
            screen:Mine
        }
    },
    {
        navigationOptions:{
            // tabBarVisible:false,//隐藏标签栏
        }
    }
)

const Navigator = StackNavigator(
    {
        Tab:{screen:Tab},
        Product:{screen:Product}    
    },
    {
        navigationOptions:{
            header:null,
            headerBackTitle:null,
            headerTintColor:'#333',

        },
        mode:'card'
    }
)
// const Navigator = DrawerNavigator(
//     {
//         Home:{screen:Home},
//         Mine:{screen:Mine}
//     },
//     {
//         contentComponent 
//     }
// )

export default class Demo extends Component{
    render(){
        return(
            <Navigator />
        )
    }
}