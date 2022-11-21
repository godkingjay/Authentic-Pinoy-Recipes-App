import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { categoryFoods } from "../controller/query";

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