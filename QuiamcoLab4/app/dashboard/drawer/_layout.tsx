import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Drawer from 'expo-router/drawer'

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView>
        <Drawer>
            <Drawer.Screen
            name="drawer"
            options={{
              title: "Home",
              drawerLabel: 'Dashboard',
            }}
            />
        </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerLayout