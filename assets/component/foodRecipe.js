import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import window from "../controller/window";
import tableStyles from "../styles/tableStyles";
import FoodRecipeDetails from "./foodRecipeDetails";

export default function FoodRecipe({ recipe }) {
  return(
    <View style={ styles.recipeContainer }>
      <FoodRecipeDetails style={ styles.recipeBranchContainer } details={ recipe.details }/>
      <View style={ styles.divider }></View>
      <Text style={ styles.recipeLabel }>Ingredients</Text>
      {recipe.ingredients.map((ingredient, index) => {
        return(
          <View key={ index } style={ styles.ingredientContainer }>
            <View style={ styles.ingredientNumberContainer }>
              <Text style={ styles.ingredientNumber }>{ index + 1 }</Text>
            </View>
            <View style={ styles.ingredientDetails }>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#222' }}>{ ingredient.name }</Text>
              {ingredient.tagalog != null ? (
                <View>
                  <Text style={{ fontSize: 12, marginTop: -4, color: '#444', fontStyle: 'italic' }}>{ ingredient.tagalog }</Text>
                </View>
              ) : (
                null
              )}
              {ingredient.type != null || ingredient.amount != null ? (
                <View style={ [tableStyles.container, tableStyles.border, { marginTop: 8, width: '100%' }] }>
                  {ingredient.type != null ? (
                    <View style={ [styles.twoColumns, styles.rowDivider] }>
                      <Text style={ styles.leftColumn }>Type</Text>
                      <Text style={ styles.rightColumn }>{ ingredient.type }</Text>
                    </View>
                  ) : (
                    null
                  )}
                  {ingredient.amount != null ? (
                    <View style={ styles.twoColumns }>
                      <Text style={ styles.leftColumn }>Amount</Text>
                      <Text style={ styles.rightColumn }>{ ingredient.amount }</Text>
                    </View>
                  ) : (
                    null
                  )}
                </View>
              ) : (
                null
              )}
            </View>
          </View>
        );
      })}
      <View style={ styles.divider }></View>
      <Text style={ styles.recipeLabel }>Instructions</Text>
      <FlatList
        horizontal={ true }
        data={ recipe.instructions }
        renderItem={({ item, index }) => (
          <View style={ styles.instructionContainer }>
            <Text style={ styles.instruction }>{ item }</Text>
            <Text style={ styles.instructionNumberContainer }>{ index + 1 }</Text>
          </View>
        )}
      />
      <View style={ styles.divider }></View>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeContainer: {
    marginVertical: 4,
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
    fontSize: 24,
    marginVertical: 8,
    marginTop: 16,
    color: '#222',
    textDecorationLine: 'underline',
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
    height: 96,
    width: 48,
    backgroundColor: '#36C464',
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
    flex: 1
  },
  twoColumns: {
    flex: 1,
    flexDirection: 'row',
    borderColor: "#444"
  },
  leftColumn: {
    flex: 1,
    textAlign: 'right',
    paddingHorizontal: 8,
    fontWeight: 'bold',
    borderRightWidth: 1,
    fontSize: 12
  },
  rightColumn: {
    flex: 3.25,
    textAlign: 'center',
    fontStyle: 'italic',
    flexWrap: 'wrap',
    fontSize: 12
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderColor: '#222',
  },
  instructionContainer: {
    width: window.width - 56,
    marginHorizontal: 12,
    alignItems: 'center',
    paddingBottom: 10
  },
  instructionNumberContainer: {
    backgroundColor: '#60a0FF',
    width: 36,
    fontSize: 20,
    aspectRatio: 1,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    elevation: 2,
    position: 'absolute',
  },
  instruction: {
    backgroundColor: '#80c0FF',
    maxWidth: 480,
    minHeight: 160,
    paddingHorizontal: 24,
    marginTop: 18,
    paddingTop: 24,
    paddingBottom: 12,
    width: "100%",
    borderRadius: 12,
    elevation: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    fontSize: 16
  }
});