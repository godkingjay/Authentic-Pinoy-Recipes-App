import React from "react";
import { useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { View } from "react-native";
import FoodCard from "../assets/component/foodCard";
import PinoyFoods from "../assets/FoodsDB/foodsDB";
import globalStyles from "../assets/styles/globalStyles";

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export default function Search({ navigation, route }) {
  const [foods, setFoods] = useState(PinoyFoods);

  foods.sort(function(a, b) {
    return compareStrings(a.name, b.name);
  });

  return(
    <View style={ globalStyles.screen }>
      <TextInput style={ styles.searchField } placeholder="Search..."></TextInput>
      <FlatList
        data={ foods }
        renderItem={({ item }) => (
          <FoodCard food={ item } navigation={ navigation } route={ route }/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchField: {
    marginHorizontal: 8,
    marginVertical: 8,
    borderWidth: 2,
    textAlignVertical: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 100,
    fontSize: 20,
    borderColor: '#666',
    color: '#444',
  }
});