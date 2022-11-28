import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FoodCategoryCard({ navigation, route, category }){
  return(
    <View style={ styles.cardWrapper }>
      <TouchableOpacity activeOpacity={ 0.6 } style={[ styles.cardContainer, {
          backgroundColor: category.color != null ? ( category.color ) : ('#FEA11F'),
        } ]}
        onPress={() => navigation.navigate('FoodCategory', category.name)}
      >
        <View style={ styles.cardLabelContainer }>
          <Text style={ styles.cardCategoryName }>{ category.name }</Text>
        </View>
        <View style={ styles.cardDeco1 }></View>
        <View style={ styles.cardDeco2 }></View>
        <View style={ styles.cardImageContainer }>
          <Image style={{ aspectRatio: 1, height: '200%', marginRight: '-25%' }} source={ category.image != null ? (category.image) : (require('../images/no-image.png')) }/>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 8,
    elevation: 4,
  },
  cardLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  cardCategoryName: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20
  },
  cardImageContainer: {
    height: 96,
    aspectRatio: 3/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardDeco1: {
    height: '150%',
    borderRadius: 1000,
    aspectRatio: 1,
    position: 'absolute',
    backgroundColor: '#fff3',
    left: '-10%',
    bottom: '-80%',
  },
  cardDeco2: {
    height: '100%',
    borderRadius: 1000,
    aspectRatio: 1,
    position: 'absolute',
    backgroundColor: '#fff2',
    right: '-10%',
    top: '-60%',
  }
});