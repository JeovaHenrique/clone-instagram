import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome5} from '@expo/vector-icons'

import HomeStackNavigator from './HomeStackNavigator'
import PictureStackNavigator from './PictureStackNavigator'

const Tab = createBottomTabNavigator()

export default function LoggedTabNavigator() {
    return (
       <Tab.Navigator>
           <Tab.Screen
                name="HomeStackNavigator"
                component={HomeStackNavigator}
                options={{
                    headerShown: false,
                    title: 'Feed',
                    tabBarIcon: ({color, size}) => <FontAwesome5 name='newspaper' size={size} color={color} />
                }}
           />
           <Tab.Screen
                name="PictureStackNavigator"
                component={PictureStackNavigator}
                options={{
                    headerShown: false,
                    title: 'Images',
                    tabBarIcon: ({color, size}) => <FontAwesome5 name='image' size={size} color={color} />
                }}
           />
       </Tab.Navigator> 
    );
}