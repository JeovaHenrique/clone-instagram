import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ChatListScreen from './screens/ChatListScreen'
import ChatScreen from './screens/ChatScreen'

const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name= 'LoginScreen' component={LoginScreen} options={{headerShown: false}}/> 
        <stack.Screen name= 'HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
        <stack.Screen name= 'ChatListScreen' component={ChatListScreen} options={{title: 'Chat List'}}/>
        <stack.Screen name= 'ChatScreen' component={ChatScreen} options={{title:'Chat'}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}