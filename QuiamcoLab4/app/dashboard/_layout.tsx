import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons'

const DashboardLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#FCB316',
            tabBarInactiveBackgroundColor: '#1844A5',
            tabBarActiveBackgroundColor: '#091A3F'

        }}
    >
        <Tabs.Screen name='index'
        options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({focused}) => <MaterialCommunityIcons name={ focused ? 'home': 'home-outline'} size={24} color={'#FCB316'}/>
            
            }}/>
        <Tabs.Screen name='user'
        options={{
            headerShown: false,
            title: 'Profile',
            tabBarIcon: ({focused}) => <MaterialCommunityIcons name={ focused ? 'account': 'account-outline'} size={24} color={'#FCB316'}/>
            }}/>
        <Tabs.Screen name='settings'
        options={{
            headerShown: false,
            title: 'Settings',
            tabBarIcon: ({focused}) => <MaterialCommunityIcons name={ focused ? 'cog': 'cog-outline'} size={24} color={'#FCB316'}/>
            }}/>
    </Tabs>
  )
}

export default DashboardLayout