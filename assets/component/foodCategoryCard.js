import React from 'react';
import { Text } from 'react-native';

export default function FoodCategoryCard({ category }){
  return(
    <Text>{ category.name }</Text>
  );
}