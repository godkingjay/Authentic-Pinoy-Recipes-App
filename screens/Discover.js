import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import HorizontalCardsContainer from "../assets/component/horizontalCardsContainer";
import { discoverFoodCategories } from "../assets/controller/query";
import globalStyles from "../assets/styles/globalStyles";

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

export default function Discover({ navigation, route }) {
  const [ discoverCategories, setDiscoverCategories ] = useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            backgroundColor: "#2221",
            padding: 6,
            borderRadius: 100,
          }}
          activeOpacity={ 0.6 }
          onPress={() => navigation.navigate('SearchStack')}
        >
          <Icon type="material-icons" name="search" color="#222"/>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    discoverFoodCategories()
      .then(data => {
        setDiscoverCategories((shuffle(data)).splice(0, data.length < 8 ? data.length : 8));
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