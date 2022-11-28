import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discover from "../screens/Discover";
import FoodView from "../screens/FoodView";
import FoodCategory from "../screens/FoodCategory";

const Stack = createNativeStackNavigator();

const DiscoverStack = () => (
  <Stack.Navigator
    initialRouteName="Discover"
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
    <Stack.Screen
      name='FoodCategory'
      component={ FoodCategory }
      options={({ navigation, route }) => ({
        title: 'Food Category'
      })}
    />
  </Stack.Navigator>
);

export default DiscoverStack;