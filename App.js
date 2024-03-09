import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import DrawerTabs from './Components/Navigation/DrawerTabs';
import MovieScreen from './Components/Pages/BottomPages/Movies/MovieScreen';
import MovieSearch from './Components/Pages/BottomPages/Movies/MovieSearch';


const Stack = createNativeStackNavigator();


const firebaseConfig = {
  apiKey: "AIzaSyDH6U_6_ch76NKCiinaqpE_nxZElOUmai8",
  authDomain: "ottassignment.firebaseapp.com",
  projectId: "ottassignment",
  storageBucket: "ottassignment.appspot.com",
  messagingSenderId: "102537204968",
  appId: "1:102537204968:web:3a52b8705b1edb4461655d",
  measurementId: "G-T1ZTV2XPMX"
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Drawer" component={DrawerTabs}/>
        <Stack.Screen name="Movie" component={MovieScreen}/>
        <Stack.Screen name="Search" component={MovieSearch}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
