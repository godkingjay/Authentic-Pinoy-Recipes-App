import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";
import FoodView from "../screens/FoodView";
import FoodCategory from "../screens/FoodCategory";

const Stack = createNativeStackNavigator();

const FavoritesStack = () => (
  <Stack.Navigator
    initialRouteName="Favorites"
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
      name="Favorites"
      options={({navigation, route}) => ({
        title: "Favorites",
      })}
    >
      {(props) => <Favorites {...props}/>}
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

export default FavoritesStack;