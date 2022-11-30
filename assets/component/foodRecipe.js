import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { foodIngredient } from "../controller/query";
import window from "../controller/window";
import tableStyles from "../styles/tableStyles";
import FoodIngredient from "./foodIngredient";
import FoodRecipeDetails from "./foodRecipeDetails";

export default function FoodRecipe({ recipe }) {
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    foodIngredient(recipe.ingredients)
      .then(data => {
        setIngredient(data);
      })
      .catch(error => {
        alert(error)
      });
  }, []);

  return(
    <View style={ styles.recipeContainer }>
      <FoodRecipeDetails style={ styles.recipeBranchContainer } details={ recipe.details }/>
      <View style={ styles.divider }></View>
      <View style={ styles.ingredientsContainer }>
        <Text style={ styles.ingredientsLabel }>Ingredients</Text>
        <View>
          {recipe.ingredients.map((ingredient, index) => {
            return(
              // <View key={ index } style={ styles.ingredientContainer }>
              //   <View style={ styles.ingredientNumberContainer }>
              //     <Text style={ styles.ingredientNumber }>{ index + 1 }</Text>
              //   </View>
              //   <View style={ styles.ingredientImageContainer }>
              //     <Image style={ styles.ingredientImage } source={ require('../images/no-image.png') }/>
              //   </View>
              //   <View style={ styles.ingredientDetails }>
              //     <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#222' }}>{ ingredient.name }</Text>
              //     {ingredient.tagalog != null ? (
              //       <View>
              //         <Text style={{ fontSize: 12, marginTop: -4, color: '#444', fontStyle: 'italic' }}>{ ingredient.tagalog }</Text>
              //       </View>
              //     ) : (
              //       null
              //     )}
              //     {ingredient.type != null || ingredient.amount != null ? (
              //       <View style={ [tableStyles.container, tableStyles.border, { marginTop: 8, width: '100%' }] }>
              //         {ingredient.type != null ? (
              //           <View style={ [styles.twoColumns, styles.rowDivider] }>
              //             <Text style={ styles.leftColumn }>Type</Text>
              //             <Text style={ styles.rightColumn }>{ ingredient.type }</Text>
              //           </View>
              //         ) : (
              //           null
              //         )}
              //         {ingredient.amount != null ? (
              //           <View style={ styles.twoColumns }>
              //             <Text style={ styles.leftColumn }>Amount</Text>
              //             <Text style={ styles.rightColumn }>{ ingredient.amount }</Text>
              //           </View>
              //         ) : (
              //           null
              //         )}
              //       </View>
              //     ) : (
              //       null
              //     )}
              //   </View>
              // </View>
              <FoodIngredient
                key={ index }
                ingredient={ ingredient }
                ingredientImage={ foodIngredient[index] }
                index={ index }
              />
            );
          })}
        </View>
      </View>
      <View style={ styles.divider }></View>
      <View style={ styles.instructionsContainer }>
        <Text style={ styles.instructionsLabel }>Instructions</Text>
        <FlatList
          horizontal={ true }
          data={ recipe.instructions }
          renderItem={({ item, index }) => (
            <View style={ styles.instructionWrapper }>
              <View style={ styles.instructionContainer }>
                <Text style={ styles.instructionNumberContainer }>Step { index + 1 }</Text>
                <Text style={ styles.instruction }>{ item }</Text>
              </View>
            </View>
          )}
        />
      </View>
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
    marginVertical: 16,
  },
  recipeLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 8,
    marginTop: 16,
    color: '#222',
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
  },
  ingredientsContainer: {
    borderRadius: 8,
    alignItems: 'center',
  },
  ingredientsLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    paddingVertical: 4,
    color: '#222',
    textTransform: 'uppercase',
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#36C464',
    color: '#fff',
    elevation: 2,
    maxWidth: 480,
    width: "100%",
  },
  instructionsContainer: {
    alignItems: 'center',
  },
  instructionsLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    paddingVertical: 4,
    color: '#222',
    textTransform: 'uppercase',
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#36C464',
    color: '#fff',
    elevation: 2,
    marginHorizontal: 12,
    maxWidth: 480,
    width: "100%",
  },
  instructionWrapper: {
    width: window.width - 56,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  instructionContainer: {
    width: window.width - 56,
    alignItems: 'center',
    elevation: 2,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 8,
    maxWidth: 480,
  },
  instructionNumberContainer: {
    backgroundColor: '#36C464',
    fontSize: 20,
    width: '100%',
    textTransform: 'uppercase',
    padding: 4,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    elevation: 2,
  },
  instruction: {
    backgroundColor: '#FFC02D',
    maxWidth: 480,
    minHeight: 200,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 16,
    width: "100%",
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    lineHeight: 20,
  }
});