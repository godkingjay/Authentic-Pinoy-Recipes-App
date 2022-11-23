import React from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import foodCategory from "../assets/FoodsDB/foodCategories";
import globalStyles from "../assets/styles/globalStyles";

export default function Categories() {
  return(
    <ScrollView style={ globalStyles.screen }>
      {foodCategory.map(( item, index ) => {
        return(
          <Text key={ index}>{ item.name }</Text>
        );
      })}
    </ScrollView>
  );
}