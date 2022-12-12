import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/Categories';
import FoodCategory from '../screens/FoodCategory';
import FoodView from '../screens/FoodView';

const Stack = createNativeStackNavigator();

const CategoriesStack = () => (
  <Stack.Navigator
    initialRouteName="Categories"
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
      name="Categories"
      component={ Categories }
      options={({ navigation, route }) => ({
        title: "Categories",
      })}
    />
    <Stack.Screen
      name='FoodCategory'
      component={ FoodCategory }
      options={({ navigation, route }) => ({
        title: 'Food Category'
      })}
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

export default CategoriesStack;