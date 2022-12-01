import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Text, View } from "react-native";
import { discoverFoods } from "../controller/query";
import HorizontalCard from "./horizontalCards";

export default function HorizontalCardsContainer({ navigation, route, foodCategory }) {

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    discoverFoods(foodCategory.name)
      .then(data => {
        setFoods(data);
      })
      .catch(error => {
        alert(error)
      });
  }, []);

  return(
    <View style = { styles.cardsContainer }>
      <Text style = { styles.foodCategoryName }>{ (foodCategory.name).toUpperCase() }</Text>
      <FlatList
        style = { styles.cards }
        keyExtractor={ foods.id }
        data={ foods }
        horizontal={ true }
        renderItem={({ item }) => (
          <HorizontalCard navigation={ navigation } route={ route } food={ item } />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    paddingHorizontal: 8,
    marginVertical: 8
  },
  cards: {
    paddingBottom: 4,
  },
  foodCategoryName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222'
  }
});