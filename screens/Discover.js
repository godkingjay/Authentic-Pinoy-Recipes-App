import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, View } from "react-native";
import HorizontalCardsContainer from "../assets/component/horizontalCardsContainer";
import discoverCategories from "../assets/FoodsDB/discoverCategoriesDB";

export default function Discover({ navigation, route }) {
  return(
    <View>
      <View style = { styles.horizontalCardsContainer }>
        <FlatList
          keyExtractor={ discoverCategories.id }
          data = { discoverCategories }
          renderItem = {({ item }) => (
            <HorizontalCardsContainer foodCategory={ item } />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalCardsContainer: {
    margin: 4,
    padding: 4,
  }
});