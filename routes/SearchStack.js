import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import FoodView from "../screens/FoodView";

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
    <Stack.Screen
      name="FoodView"
      component={ FoodView }
      options={({navigation, route}) => ({
        title: "Food View",
      })}
    />
  </Stack.Navigator>
);

export default SearchStack;