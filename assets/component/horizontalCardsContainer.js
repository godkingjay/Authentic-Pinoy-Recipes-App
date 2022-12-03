import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Text, View } from "react-native";
import { discoverFoods } from "../controller/query";
import DiscoverSeeAll from "./discoverSeeAll";
import HorizontalCard from "./horizontalCards";

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default function HorizontalCardsContainer({ navigation, route, foodCategory }) {

  const [foods, setFoods] = useState([]);
  const [discover, setDiscover] = useState([]);

  useEffect(() => {
    discoverFoods(foodCategory.name)
      .then(data => {
        setFoods(data);
        setDiscover((shuffle(data)).splice(0, data.length < 6 ? data.length : 6));
      })
      .catch(error => {
        alert(error)
      });
  }, []);

  return(
    <View style = { styles.cardsContainer }>
      <View style={ styles.cardsLabelContainer }>
        <Text style = { styles.foodCategoryName }>{ (foodCategory.name).toUpperCase() }</Text>
        <DiscoverSeeAll navigation={ navigation } route={ route } foodType={ foodCategory.name }/>
      </View>
      <View style={ styles.divider }></View>
      <FlatList
        style = { styles.cards }
        keyExtractor={ discover.id }
        data={ discover }
        horizontal={ true }
        showsHorizontalScrollIndicator={ false }
        renderItem={({ item, index }) => (
          <HorizontalCard navigation={ navigation } route={ route } food={ item } />
        )}
      />
      <View style={ styles.divider }></View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    paddingHorizontal: 8,
    marginVertical: 2
  },
  cards: {
    paddingBottom: 4,
  },
  cardsLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodCategoryName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
    flex: 1,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#2221',
    marginTop: 6,
    marginBottom: 4,
  },
});