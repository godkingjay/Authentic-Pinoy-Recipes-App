import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings";

const Stack = createNativeStackNavigator();

const SettingsStack = () => (
  <Stack.Navigator
    initialRouteName="Settings"
    screenOptions = {{
      headerShown: true,
      headerTitleStyle: {
        fontWeight: "bold",
        textTransform: 'uppercase',
        color: '#222',
      },
    }}
  >
    <Stack.Screen
      name="Settings"
      component={ Settings }
    />
  </Stack.Navigator>
);

export default SettingsStack;