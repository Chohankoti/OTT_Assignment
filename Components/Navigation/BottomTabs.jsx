import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Movies from '../Pages/BottomPages/Movies';
import Series from '../Pages/BottomPages/Series';

export default function BottomTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Movies" component={Movies} />
            <Tab.Screen name="Series" component={Series} />
        </Tab.Navigator>
    );
}