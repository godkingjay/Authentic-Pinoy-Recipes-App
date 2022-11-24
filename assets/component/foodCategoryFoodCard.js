import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';

export default function FoodCategoryFoodCard({ food }) {
  return(
    <View>
      <Text>{ food.name }</Text>
    </View>
  );
}