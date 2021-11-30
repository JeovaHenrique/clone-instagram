import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import ChatListScreen from './screens/ChatListScreen'

const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name= 'HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
        <stack.Screen name= 'ChatListScreen' component={ChatListScreen} options={{title: 'Chat List'}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}