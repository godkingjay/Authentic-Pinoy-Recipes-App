import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import foodCategory from '../FoodsDB/foodCategories';
import FavoriteButton from './favoriteButton';

export default function FoodCard({ navigation, route, food }) {

  const [foodColor, setFoodColor] = useState(() => {
    let result = foodCategory.filter(({ name }) => name == food.type[0])[0];
    return result != null ? result.color != null ? result.color : `#FEA11F` : `#FEA11F`;
  });

  return(
    <View style={ styles.cardWrapper }>
      <TouchableOpacity activeOpacity={ 0.8 } style={ styles.cardContainer } onPress={() => {
        navigation.push("FoodView", food);
      }}>
        <View style={ styles.cardImageContainer }>
          <Image style={ styles.cardImage } source={ food.image }/>
        </View>
        <View
          style={[
            styles.cardFoodColor,
            {
              borderColor: foodColor,
            }
          ]}
        ></View>
        <View style={ styles.cardDetailsContainer }>
          <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 16 }}>{ food.name }</Text>
          <Text style={{ color: '#444', fontStyle: 'italic', fontSize: 12, marginTop: -4 }}>{ food.tagalog }</Text>
          <View style={ styles.foodTypeContainer }>
            <View style={ styles.foodType }>
              <Text style={ styles.foodTypeLabel}>{ food.type[0] }</Text>
            </View>
            {food.type.length > 1 ? (
              <Text style={ styles.foodTypesLabel }>+{ food.type.length - 1 }</Text>
            ) : (
              null
            )}
          </View>
        </View>
        <View style={ styles.favButtonContainer }>
          <FavoriteButton id={ food.id }/>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardContainer: {
    height: 96,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 2,
    overflow: 'hidden',
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    // borderWidth: 1,
    // borderColor: '#2221',
    // shadowColor: '#0008',
  },
  cardImageContainer: {
    height: 96,
    aspectRatio: 5/4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  cardFoodColor: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRightWidth: 3,
  },
  cardDetailsContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    height: '100%',
    flex: 1,
  },
  foodTypeContainer: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  foodType: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 6,
    borderColor: '#888',
  },
  foodTypeLabel: {
    fontSize: 10,
    color: '#888',
    fontWeight: 'bold',
  },
  foodTypesLabel: {
    fontSize: 8,
    color: '#888',
    fontWeight: 'bold',
    aspectRatio: 1,
    padding: 4,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#888',
    marginLeft: 6,
  },
  favButtonContainer: {
    padding: 8,
  }
});