import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import FoodRecipeDetails from "./foodRecipeDetails";

export default function FoodRecipe({ recipe }) {
  return(
    <View style={ styles.recipeContainer }>
      <FoodRecipeDetails style={ styles.recipeBranchContainer } details={ recipe.details }/>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeContainer: {
    marginVertical: 4
  },
  recipeBranchContainer: {
    marginVertical: 8
  }
});