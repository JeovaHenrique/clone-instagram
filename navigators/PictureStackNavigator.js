import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import PictureScreen from '../screens/PictureScreen'

const stack = createStackNavigator()

export default function PictureStackNavigator() {
    return (
        <stack.Navigator>
            <stack.Screen name= 'PictureScreen' component={PictureScreen} options={{headerShown: false}}/>
        </stack.Navigator>
    );
}