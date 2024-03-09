import React from 'react';
import { View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import { Entypo, Feather } from '@expo/vector-icons'; // Import icons from Expo

import BottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator();

const CustomHeader = ({ navigation }) => {
  return (
    <DrawerToggleButton size="40" onPress={() => navigation.toggleDrawer()} tintColor="#fff" color="#fff" />
  );
};

export default function DrawerTabs() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props}/>}
    >
      <Drawer.Screen
        name="DMovies"
        component={BottomTabs}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerLeft: () => <CustomHeader />,
          title:'',
          drawerLabel: ({ focused, color, size }) => (           
              <Text style={{ color: '#fff' }}> Home</Text>           
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
