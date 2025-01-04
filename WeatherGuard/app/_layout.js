import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Login from './Login';
import Signup from './Signup';
import Homepage from './Homepage';
import Notification from './Notification';
import FamilyConnectivity from './FamilyConnectivity';
import SideMenu from '../components/SideMenu'; // Adjust the path as needed
import Opening from './Opening';
import Map from './MapScreen';
import Settings from './Settings';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs Navigator
const BottomTabs = ({ navigation }) => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#FCB316',
      tabBarInactiveTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#091A3F',
      },
      headerStyle: {
        backgroundColor: '#091A3F',
      },
      headerTintColor: '#fff',
    }}
  >
    <Tab.Screen
      name="Home"
      component={Homepage}
      options={{
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name={focused ? 'home' : 'home-outline'}
            size={24}
            color="#FCB316"
          />
        ),
        headerShown: false,  // This hides the header for the Home screen
      }}
    />
    <Tab.Screen
      name="Notification"
      component={Notification}
      options={{
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name={focused ? 'bell' : 'bell-outline'}
            size={24}
            color="#FCB316"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Map"
      component={Map}
      options={{
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name={focused ? 'map' : 'map-outline'}
            size={24}
            color="#FCB316"
          />
        ),
      }}
    />
    <Tab.Screen
      name="FamilyConnectivity"
      component={FamilyConnectivity}
      options={{
        title: 'Family',
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name={focused ? 'account-group' : 'account-group-outline'}
            size={24}
            color="#FCB316"
          />
        ),
      }}
    />
    <Tab.Screen
      name="DrawerToggle"
      component={() => null} // Placeholder component
      listeners={{
        tabPress: (e) => {
          e.preventDefault(); // Prevent default tab action
          navigation.openDrawer(); // Open the drawer
        },
      }}
      options={{
        title: 'Menu',
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="menu"
            size={24}
            color="#FCB316"
          />
        ),
      }}
    />
  </Tab.Navigator>
);

// Auth Stack Navigator
const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="Opening"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#091A3F',
      },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen
      name="Opening"
      component={Opening}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{ title: 'Create an Account' }}
    />
  </Stack.Navigator>
);

// Settings Stack Navigator
const SettingsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#091A3F',
      },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{ title: 'Settings' }}
    />
  </Stack.Navigator>
);

// Root Drawer Navigator
const RootLayout = () => (
  <Drawer.Navigator
    initialRouteName="Auth"
    drawerContent={(props) => <SideMenu {...props} />}
    screenOptions={{
      drawerStyle: {
        backgroundColor: 'rgba(9, 26, 63, 0.8)',
      },
      drawerPosition: 'right',
      headerShown: false,
    }}
  >
    <Drawer.Screen name="Auth" component={AuthStack} />
    <Drawer.Screen name="MainApp" component={BottomTabs} />
    <Drawer.Screen name="Settings" component={SettingsStack} />
  </Drawer.Navigator>
);

export default RootLayout;
