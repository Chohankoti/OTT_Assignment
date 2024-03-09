import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Movies from '../Pages/BottomPages/Movies';
import Series from '../Pages/BottomPages/Series';

export default function BottomTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Movies') {
                        return <Feather name="tv" size={24} color="black" />
                        
                    } else if (route.name === 'Series') {
                        return <MaterialIcons name="movie" size={24} color="black" />
                    }
                },
            })}
        >
            <Tab.Screen name="Movies" component={Movies} />
            <Tab.Screen name="Series" component={Series} />
        </Tab.Navigator>
    );
}
