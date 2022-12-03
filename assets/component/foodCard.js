import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import FavoriteButton from './favoriteButton';

export default function FoodCard({ navigation, route, food }) {
  return(
    <View style={ styles.cardWrapper }>
      <TouchableOpacity activeOpacity={ 0.8 } style={ styles.cardContainer } onPress={() => navigation.navigate("FoodView", food)}>
        <View style={ styles.cardImageContainer }>
          <Image style={ styles.cardImage } source={ food.image }/>
        </View>
        <View style={ styles.cardDetailsContainer }>
          <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 16 }}>{ food.name }</Text>
          <Text style={{ color: '#444', fontStyle: 'italic', fontSize: 12, marginTop: -4 }}>{ food.tagalog }</Text>
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
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  cardContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 4,
    overflow: 'hidden',
    borderRadius: 8,
    alignItems: 'center',
    flex: 1
  },
  cardImageContainer: {
    aspectRatio: 5/4,
    maxHeight: 96,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    height: '100%',
    aspectRatio: 5/4,
    resizeMode: 'cover',
  },
  cardDetailsContainer: {
    padding: 8,
    height: '100%',
    flex: 1,
  },
  favButtonContainer: {
    padding: 8,
  }
});