import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discover from "../screens/Discover";
import FoodView from "../screens/FoodView";

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
    <Stack.Screen
      name="FoodView"
      component={ FoodView }
      options={({navigation, route}) => ({
        title: "Food View",
      })}
    />
  </Stack.Navigator>
);

export default DiscoverStack;