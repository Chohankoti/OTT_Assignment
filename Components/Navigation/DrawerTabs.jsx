import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

import Profile from '../Pages/DrawerPages/Profile';
import WatchLater from '../Pages/DrawerPages/WatchLater';

import BottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator();

const CustomHeader = ({ navigation }) => {
  return (
    <DrawerToggleButton size="40" onPress={() => navigation.toggleDrawer()} tintColor="#fff" color="#fff" />
  );
};



export default function DrawerTabs() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
      <Drawer.Screen
        name="DMovies"
        component={BottomTabs}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerLeft: () => <CustomHeader />,
          title:'',
          drawerLabel: 'Home', 
        }}
      />
      <Drawer.Screen
        name="WatchLater"
        component={WatchLater}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerLeft: () => <CustomHeader />,
          title:'',
          drawerLabel: 'WatchLater', 
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerLeft: () => <CustomHeader />,
          title:'',
          drawerLabel: 'Profile', 
          
        }}
      />
    </Drawer.Navigator>
  );
}
