import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerShown: false,
      activeTintColor: '#3498db',
    }}
   
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={Messages}
      options={{
        tabBarLabel: 'Messages',
        tabBarIcon: ({ color, size }) => (
          <Icon name="chatbox" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Icon name="person" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
