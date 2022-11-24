import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FoodCategoryCard({ category }){
  return(
    <View style={ styles.cardWrapper }>
      <View style={ styles.cardContainer }>
        <View style={ styles.cardLabelContainer }>
          <Text>{ category.name }</Text>
        </View>
        <View style={ styles.cardImageContainer }>
          <Text>Image</Text>
        </View>
      </View>
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
  cardImageContainer: {
    height: 96,
    backgroundColor: 'blue',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});