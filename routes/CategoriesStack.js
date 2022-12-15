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
      headerStyle: {
        justifyContent: 'center',
      },
    }}
  >
    <Stack.Screen
      name="Categories"
      options={({ navigation, route }) => ({
        title: "Categories",
      })}
    >
      {(props) => <Categories {...props}/>}
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
    <Stack.Screen
      name="FoodView"
      options={({navigation, route}) => ({
        title: "Food View",
        animation: "slide_from_bottom"
      })}
    >
      {(props) => <FoodView {...props}/>}
    </Stack.Screen>
  </Stack.Navigator>
);

export default CategoriesStack;