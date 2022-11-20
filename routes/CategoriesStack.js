import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/Categories';

const Stack = createNativeStackNavigator();

const CategoriesStack = () => (
  <Stack.Navigator
    initialRouteName="Categories"
    screenOptions = {{
      headerShown: true
    }}
  >
    <Stack.Screen
      name="Categories"
      component={ Categories }
    />
  </Stack.Navigator>
);

export default CategoriesStack;