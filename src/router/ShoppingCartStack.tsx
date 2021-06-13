import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ShoopingCartScreen from "../screens/ShoopingCartScreen";
import AddressScreen from "../screens/AddressScreen";
import ShopingCartScreen from "../screens/ShoopingCartScreen";

const Stack = createStackNavigator();

const HomeStack = () =>{
    return(
        
        <Stack.Navigator>
            <Stack.Screen component = {ShopingCartScreen}
            name = "cart" 
            options={{title: 'Carrito'}}
            />
            <Stack.Screen 
            component = {AddressScreen} 
            name = "Address"
            options={{title: 'Dirección'}} />
        </Stack.Navigator>
        
    );
};

export default HomeStack;