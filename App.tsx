/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView,StatusBar, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
//  import HomeScreen from './src/screens/HomeScreen';
//  import ProductScreen from './src/screens/ProductScreen';
//  import ShoopingCartScreen from './src/screens/ShoopingCartScreen';
//  import AddressScreen from './src/screens/AddressScreen';
 //import Icon from 'react-native-vector-icons/FontAwesome';

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
     flex: 1,
   };

   return (
     <View style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       {/*<ShoopingCartScreen/>*/}
       <Router/>
     </View>
   );
 };

 

 export default App;
