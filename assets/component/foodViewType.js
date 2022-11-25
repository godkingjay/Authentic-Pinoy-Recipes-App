import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import foodCategory from '../FoodsDB/foodCategories';

export default function FoodViewType({ foodType }){
  const [category, setCategory] = useState(() => {
    for(let i = 0; i <= foodCategory.length; i++){
      if(i == foodCategory.length) return(foodCategory[0]);
      if(foodCategory[i].name == foodType){
        return(foodCategory[i]);
      }
    }
  });
  return(
    <View style={ styles.typeWrapper }>
      <View style={ [styles.typeContainer, {
        backgroundColor: category.color != null ? (category.color) : '#FEA11F',
      }] }>
        <Text style={ styles.typeText }>{ foodType }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  typeWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  typeContainer: {
    backgroundColor: "#222",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 100,
    elevation: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeText: {
    color: '#fff',
    margin: 'auto',
    fontWeight: 'bold',
    fontSize: 16
  }
});