import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Movies from '../Pages/Movies';
import Series from '../Pages/Series';
import WatchLater from '../Pages/WatchLater';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Series" component={Series} />
      <Tab.Screen name="WatchLater" component={WatchLater} />
    </Tab.Navigator>
  );
}
