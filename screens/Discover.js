import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, View } from "react-native";
import HorizontalCardsContainer from "../assets/component/horizontalCardsContainer";
import discoverCategories from "../assets/FoodsDB/discoverCategoriesDB";
import globalStyles from "../assets/styles/globalStyles";

export default function Discover({ navigation, route }) {
  let categoryNum = 1;
  return(
    <ScrollView style={ globalStyles.screen }>
      <View style = { styles.horizontalCardsContainer }>
        { discoverCategories.map((category, value) => {
          return(
            <HorizontalCardsContainer key={ categoryNum++ } navigation={ navigation } route={ route } foodCategory={ category }/>
          )
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  horizontalCardsContainer: {
    paddingVertical: 8
  },
});