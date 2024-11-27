import React from "react";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function RootLayout() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack> 

          <Stack.Screen name="index" options={{ headerShown: false }}/>
          <Stack.Screen name="login" options={{ headerShown: false }}/>
          <Stack.Screen name="register" options={{ headerShown: false }}/>
          <Stack.Screen name="dashboard" options={{ headerShown: false }}/>
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
}