import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, Text, View } from 'react-native';
import tableStyles from '../styles/tableStyles';

export default function FoodIngredient({ ingredient, ingredientImage, index }){
  return(
    <View style={ styles.ingredientContainer }>
      <View style={ styles.ingredientNumberContainer }>
        <Text style={ styles.ingredientNumber }>{ index + 1 }</Text>
      </View>
      <View style={ styles.ingredientImageContainer }>
        {ingredientImage != null ? (
          <View style={{
            height: '100%',
            aspectRatio: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Image style={ styles.ingredientImage } source={ ingredientImage.image }/>
          </View>
          ) : (
          <View style={{
            height: '100%',
            aspectRatio: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Image style={ [styles.ingredientImage, { height: '80%' }] } source={ require('../images/no-image.png') }/>
            <Text style={{
              fontSize: 12,
              width: '100%',
              textAlign: 'center',
            }}>{ ingredient.image }</Text>
          </View>
        )}
      </View>
      <View style={ styles.ingredientDetails }>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#222' }}>{ ingredient.name }</Text>
        {ingredient.tagalog != null ? (
          <View>
            <Text style={{ fontSize: 12, marginTop: -4, color: '#444', fontStyle: 'italic' }}>{ ingredient.tagalog }</Text>
          </View>
        ) : (
          null
        )}
        {ingredient.type != null || ingredient.amount != null ? (
          <View style={ [tableStyles.container, tableStyles.border, { marginTop: 8, width: '100%' }] }>
            {ingredient.type != null ? (
              <View style={ [styles.twoColumns, styles.rowDivider] }>
                <Text style={ styles.leftColumn }>Type</Text>
                <Text style={ styles.rightColumn }>{ ingredient.type }</Text>
              </View>
            ) : (
              null
            )}
            {ingredient.amount != null ? (
              <View style={ styles.twoColumns }>
                <Text style={ styles.leftColumn }>Amount</Text>
                <Text style={ styles.rightColumn }>{ ingredient.amount }</Text>
              </View>
            ) : (
              null
            )}
          </View>
        ) : (
          null
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ingredientContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 6,
    elevation: 2,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    width: "100%",
  },
  ingredientNumberContainer: {
    height: 112,
    width: 48,
    backgroundColor: '#36C464',
  },
  ingredientNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#FFC02D',
    aspectRatio: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    elevation: 2,
  },
  ingredientImageContainer: {
    aspectRatio: 1,
    height: 72,
    padding: 4,
  },
  ingredientImage: {
    resizeMode: 'contain',
    aspectRatio: 1,
    height: '100%',
  },
  ingredientDetails: {
    padding: 8,
    flex: 1,
    height: '100%'
  },
  twoColumns: {
    flex: 1,
    flexDirection: 'row',
    borderColor: "#444"
  },
  leftColumn: {
    flex: 1,
    textAlign: 'right',
    textAlignVertical: 'center',
    paddingHorizontal: 8,
    fontWeight: 'bold',
    borderRightWidth: 1,
    fontSize: 12
  },
  rightColumn: {
    flex: 3,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontStyle: 'italic',
    flexWrap: 'wrap',
    fontSize: 12
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderColor: '#222',
  },
});