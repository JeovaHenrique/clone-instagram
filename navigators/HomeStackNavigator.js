import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import ChatListScreen from '../screens/ChatListScreen'
import ChatScreen from '../screens/ChatScreen'

const stack = createStackNavigator()

export default function HomeStackNavigator() {
  return (
      <stack.Navigator>
        <stack.Screen name= 'HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
        <stack.Screen name= 'ChatListScreen' component={ChatListScreen} options={{title: 'Chat List'}}/>
        <stack.Screen name= 'ChatScreen' component={ChatScreen} options={{title:'Chat'}}/>
      </stack.Navigator>

  );
}