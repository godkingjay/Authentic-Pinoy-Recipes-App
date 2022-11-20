import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function HorizontalCardsContainer({ foodCategory }) {
  return(
    <View style = { styles.cardsContainer }>
      <Text>{ foodCategory.name }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    marginVertical: 4,
    padding: 4,
    backgroundColor: "#0002"
  }
});