import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();

const SearchStack = () => (
  <Stack.Navigator
    initialRouteName="Search"
    screenOptions = {{
      headerShown: true
    }}
  >
    <Stack.Screen
      name="Search"
      component={ Search }
    />
  </Stack.Navigator>
);

export default SearchStack;