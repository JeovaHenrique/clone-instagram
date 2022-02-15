import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './screens/LoginScreen'
import LoggedTabNavigator from './navigators/LoggedTabNavigator'

const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name= 'LoginScreen' component={LoginScreen} options={{headerShown: false}}/> 
        <stack.Screen name= 'LoggedTabNavigator' component={LoggedTabNavigator} options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}