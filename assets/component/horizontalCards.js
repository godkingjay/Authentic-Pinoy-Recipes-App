import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HorizontalCard({ food }) {
  return(
    <View style={ styles.cardWrapper }>
      <View style={ styles.cardContainer }>
        <Text>{ food.name }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 8
  },
  cardContainer: {
    backgroundColor: "white",
    padding: 8,
    width: 96,
    aspectRatio: 3/4,
    borderRadius: 8,
    elevation: 6
  }
});