import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import FoodRecipeDetails from "./foodRecipeDetails";

export default function FoodRecipe({ recipe }) {
  return(
    <View style={ styles.recipeContainer }>
      <FoodRecipeDetails style={ styles.recipeBranchContainer } details={ recipe.details }/>
      <View style={ styles.divider }></View>
      <Text style={ styles.recipeLabel }>Ingredients</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeContainer: {
    marginVertical: 4
  },
  recipeBranchContainer: {
    marginVertical: 8
  },
  divider: {
    backgroundColor: "#0002",
    height: 1,
    width: "100%",
    marginVertical: 8,
  },
  recipeLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 4
  }
});