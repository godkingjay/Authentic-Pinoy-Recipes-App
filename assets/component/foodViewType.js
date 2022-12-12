import React from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import foodCategory from '../FoodsDB/foodCategories';

export default function FoodViewType({ navigation, route, foodType }){
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
      <TouchableOpacity activeOpacity={ 0.6 } style={[styles.typeContainer, {
          backgroundColor: category.color != null ? (category.color) : '#FEA11F',
        }]}
        onPress={() => {
          navigation.push('FoodCategory', foodType);
        }}
      >
        <Text style={ styles.typeText }>{ foodType }</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  typeWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  typeContainer: {
    backgroundColor: "#222",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 100,
    elevation: 2,
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