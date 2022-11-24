import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';

export default function FoodCategoryFoodCard({ navigation, route, food }) {
  return(
    <View style={ styles.cardWrapper }>
      <TouchableOpacity activeOpacity={ 0.6 } style={ styles.cardContainer } onPress={() => navigation.navigate("FoodView", food)}>
        <View style={ styles.cardImageContainer }>
          <Image style={ styles.cardImage } source={ food.image }/>
        </View>
        <Text>{ food.name }</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  cardContainer: {
    backgroundColor: '#FEA11F',
    flexDirection: 'row',
    elevation: 4,
    overflow: 'hidden',
    borderRadius: 8,
    alignItems: 'center',
  },
  cardImageContainer: {
    aspectRatio: 5/4,
    maxHeight: 96
  },
  cardImage: {
    height: '100%',
    aspectRatio: 5/4,
    resizeMode: 'cover',
  }
});