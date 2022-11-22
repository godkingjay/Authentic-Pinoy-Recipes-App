import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, View } from "react-native";
import HorizontalCardsContainer from "../assets/component/horizontalCardsContainer";
import discoverCategories from "../assets/FoodsDB/discoverCategoriesDB";
import globalStyles from "../assets/styles/globalStyles";

export default function Discover({ navigation, route }) {
  return(
    <View style={ globalStyles.screen }>
      <View style = { styles.horizontalCardsContainer }>
        <FlatList
          keyExtractor={ discoverCategories.id }
          data = { discoverCategories }
          renderItem = {({ item }) => (
            <HorizontalCardsContainer navigation={ navigation } route={ route } foodCategory={ item }/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalCardsContainer: {
    padding: 0,
    paddingVertical: 8
  },
});