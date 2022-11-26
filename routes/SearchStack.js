import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import FoodView from "../screens/FoodView";
import FoodCategory from "../screens/FoodCategory";

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
      options={({ navigation, route }) => ({
        headerShown: false
      })}
    />
    <Stack.Screen
      name="FoodView"
      component={ FoodView }
      options={({navigation, route}) => ({
        title: "Food View",
      })}
    />
    <Stack.Screen
      name='FoodCategory'
      component={ FoodCategory }
      options={({ navigation, route }) => ({
        title: 'Food Category'
      })}
    />
  </Stack.Navigator>
);

export default SearchStack;