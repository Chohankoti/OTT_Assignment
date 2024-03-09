import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import DrawerTabs from './Components/Navigation/DrawerTabs';
import MovieScreen from './Components/Pages/BottomPages/Movies/MovieScreen';


const Stack = createNativeStackNavigator();




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Drawer" component={DrawerTabs}/>
        <Stack.Screen name="Movie" component={MovieScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
