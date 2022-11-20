import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";

const Stack = createNativeStackNavigator();

const FavoritesStack = () => (
  <Stack.Navigator
    initialRouteName="Favorites"
    screenOptions = {{
      headerShown: true
    }}
  >
    <Stack.Screen
      name="Favorites"
      component={ Favorites }
    />
  </Stack.Navigator>
);

export default FavoritesStack;