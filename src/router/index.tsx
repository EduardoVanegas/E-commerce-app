import React from "react";
import {View,Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from "./BottomTabNav";

import HomeScreen from '../screens/HomeScreen'

const Root = createStackNavigator();

const Router = () =>{
    return(
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown: false}}>
                <Root.Screen component = {BottomTabNav} name = "HomeTabs" />
            </Root.Navigator>
        </NavigationContainer>
    );
};

export default Router;