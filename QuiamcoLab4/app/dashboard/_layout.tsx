import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Drawer from "expo-router/drawer";
import DrawerContent from "@/src/Drawer";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


const DrawerLayout = () => {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer drawerContent={DrawerContent}>
          <Drawer.Screen
            name="tabs"
            options={{
              drawerLabel: "Home",
              title: "Homepage",
              drawerIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "home" : "home-outline"}
                  size={20}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="settings"
            options={{
              drawerLabel: "Settings",
              title: "Settings",
              drawerIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "cog" : "cog-outline"}
                  size={20}
                />
              ),
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
  );
}
  
  export default DrawerLayout