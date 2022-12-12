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
      headerShown: true,
      headerTitleStyle: {
        fontWeight: "bold",
        textTransform: 'uppercase',
        color: '#444',
      },
    }}
  >
    <Stack.Screen
      name="Search"
      options={({ navigation, route }) => ({
        title: "Search",
      })}
    >
      {(props) => <Search {...props}/>}
    </Stack.Screen>
    <Stack.Screen
      name="FoodView"
      options={({navigation, route}) => ({
        title: "Food View",
        animation: "slide_from_bottom",
      })}
    >
      {(props) => <FoodView {...props}/>}
    </Stack.Screen>
    <Stack.Screen
      name='FoodCategory'
      options={({ navigation, route }) => ({
        title: 'Food Category',
        animation: "slide_from_right",
      })}
    >
      {(props) => <FoodCategory {...props}/>}
    </Stack.Screen>
  </Stack.Navigator>
);

export default SearchStack;