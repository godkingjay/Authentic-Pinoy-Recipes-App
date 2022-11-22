import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import FoodRecipeDetails from "./foodRecipeDetails";

export default function FoodRecipe({ recipe }) {
  let ingredientNum = 1;
  return(
    <View style={ styles.recipeContainer }>
      <FoodRecipeDetails style={ styles.recipeBranchContainer } details={ recipe.details }/>
      <View style={ styles.divider }></View>
      <Text style={ styles.recipeLabel }>Ingredients</Text>
      {recipe.ingredients.map((ingredient, value) => {
        return(
          <View key={ ingredientNum++ } style={ styles.ingredientContainer }>
            <View style={ styles.ingredientNumberContainer }>
              <Text style={ styles.ingredientNumber }>{ ingredientNum }</Text>
            </View>
            <View style={ styles.ingredientDetails }>
              <Text>{ ingredient.name }</Text>
            </View>
          </View>
        );
      })}
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
    marginTop: 16,
  },
  recipeLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 8,
    marginTop: 16,
    color: '#222',
  },
  ingredientContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 6,
    elevation: 2,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  ingredientNumberContainer: {
    height: '100%',
    maxHeight: 64,
    backgroundColor: '#36C464',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  ingredientNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  ingredientDetails: {
    padding: 8,
  }
});