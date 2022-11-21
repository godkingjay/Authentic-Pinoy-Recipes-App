import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Text, View } from "react-native";
import { categoryFoods } from "../controller/query";
import HorizontalCard from "./horizontalCards";

export default function HorizontalCardsContainer({ foodCategory }) {

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    categoryFoods(foodCategory.name)
      .then(data => {
        setFoods(data);
      })
      .catch(error => {
        alert(error)
      });
  }, []);

  return(
    <View style = { styles.cardsContainer }>
      <Text>{ foodCategory.name }</Text>
      <FlatList
        style = { styles.cards }
        keyExtractor={ foods.id }
        data={ foods }
        horizontal={true}
        renderItem={({ item }) => (
          <HorizontalCard food={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    marginVertical: 4,
    padding: 4,
  },
  cards: {
    paddingBottom: 4,
  }
});