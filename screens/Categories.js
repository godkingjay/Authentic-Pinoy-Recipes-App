import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import FoodCategoryCard from "../assets/component/foodCategoryCard";
import foodCategory from "../assets/FoodsDB/foodCategories";
import globalStyles from "../assets/styles/globalStyles";

export default function Categories({ navigation, route }) {
  return(
    <ScrollView style={ globalStyles.screen }>
      <View style={ styles.categoryContainer }>
        {foodCategory.map(( item, index ) => {
          return(
            <FoodCategoryCard key={ index } navigation={ navigation } route={ route } category={ item }/>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    paddingBottom: 16
  }
});