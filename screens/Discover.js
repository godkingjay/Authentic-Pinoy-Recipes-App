import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { StyleSheet, View } from "react-native";
import HorizontalCardsContainer from "../assets/component/horizontalCardsContainer";
import { discoverFoodCategories } from "../assets/controller/query";
import globalStyles from "../assets/styles/globalStyles";

export default function Discover({ navigation, route }) {
  const [ discoverCategories, setDiscoverCategories ] = useState([]);

  useEffect(() => {
    discoverFoodCategories()
      .then(data => {
        setDiscoverCategories(data);
      })
      .catch(error => {
        alert(error)
      });
  }, []);
  
  return(
    <ScrollView style={ globalStyles.screen }>
      <View style = { styles.horizontalCardsContainer }>
        { discoverCategories.map((category, index) => {
          return(
            <HorizontalCardsContainer key={ index } navigation={ navigation } route={ route } foodCategory={ category }/>
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