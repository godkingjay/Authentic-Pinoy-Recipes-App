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
      headerShadowVisible: false,
      animation:"fade"
    }}
  >
    <Stack.Screen
      name="Settings"
      options={({ navigation, route }) => ({
        title: "Settings",
      })}
    >
      {(props) => <Settings {...props}/>}
    </Stack.Screen>
    <Stack.Screen
      name="About"
      options={({ navigation, route }) => ({
        title: "About",
      })}
    >
      {(props) => <About {...props}/>}
    </Stack.Screen>
  </Stack.Navigator>
);

export default SettingsStack;