import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

const SettingsStack = () => (
  <Stack.Navigator
    initialRouteName="Settings"
    screenOptions = {{
      headerShown: true,
      headerTitleStyle: {
        fontWeight: "bold",
        textTransform: 'uppercase',
        color: '#444',
      },
    }}
  >
    <Stack.Screen
      name="Settings"
      component={ Settings }
    />
    <Stack.Screen
      name="About"
      component={ About }
    />
  </Stack.Navigator>
);

export default SettingsStack;