import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discover from "../screens/Discover";

const Stack = createNativeStackNavigator();

const DiscoverStack = () => (
  <Stack.Navigator
    initialRouteName="Discover"
    screenOptions = {{
      headerShown: true
    }}
  >
    <Stack.Screen
      name="Discover"
      component={ Discover }
    />
  </Stack.Navigator>
);

export default DiscoverStack;