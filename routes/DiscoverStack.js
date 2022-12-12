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
        color: '#444',
      },
    }}
  >
    <Stack.Screen
      name="Discover"
      options={({ navigation, route }) => ({
        title: "Discover",
      })}
    >
      {(props) => <Discover {...props}/>}
    </Stack.Screen>
    <Stack.Screen
      name="FoodView"
      options={({navigation, route}) => ({
        title: "Food View",
        animation: "slide_from_bottom"
      })}
    >
      {(props) => <FoodView {...props}/>}
    </Stack.Screen>
    <Stack.Screen
      name='FoodCategory'
      options={({ navigation, route }) => ({
        title: 'Food Category',
        animation: "slide_from_right"
      })}
    >
      {(props) => <FoodCategory {...props}/>}
    </Stack.Screen>
  </Stack.Navigator>
);

export default DiscoverStack;