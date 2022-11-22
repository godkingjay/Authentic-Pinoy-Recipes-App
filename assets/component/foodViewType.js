import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

export default function FoodViewType({ foodType }){
  return(
    <View style={ styles.typeWrapper }>
      <View style={ styles.typeContainer }>
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
    borderWidth: 1,
    borderColor: '#808080',
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