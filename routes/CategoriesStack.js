import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/Categories';
import FoodCategory from '../screens/FoodCategory';

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
    <Stack.Screen
      name='FoodCategory'
      component={ FoodCategory }
      options={({ navigation, route }) => ({
        title: 'Food Category'
      })}
    />
  </Stack.Navigator>
);

export default CategoriesStack;