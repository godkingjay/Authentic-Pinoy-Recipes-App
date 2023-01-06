import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Animated } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { foodIngredient } from "../controller/query";
import window from "../controller/window";
import tableStyles from "../styles/tableStyles";
import FoodIngredient from "./foodIngredient";
import FoodRecipeDetails from "./foodRecipeDetails";

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export default function FoodRecipe({ recipe }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    foodIngredient(recipe.ingredients)
      .then(data => {
        setIngredients(data);
      })
      .catch(error => {
        alert(error)
      });
  }, [recipe]);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return(
    <View style={ styles.recipeContainer }>
      <FoodRecipeDetails style={ styles.recipeBranchContainer } details={ recipe.details }/>
      <View style={ styles.divider }></View>
      <View style={ styles.ingredientsContainer }>
        <Text style={ styles.ingredientsLabel }>Ingredients</Text>
        <View>
          {recipe.ingredients.map((ingredient, index) => {
            return(
              <FoodIngredient
                key={ index }
                ingredient={ ingredient }
                ingredientImage={ ingredients[index] }
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
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal={ true }
          data={ recipe.instructions }
          pagingEnabled={ true }
          showsHorizontalScrollIndicator={ false }
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          decelerationRate={'normal'}
          scrollEventThrottle={16}
          // ListHeaderComponent={
          //   <View style={{
          //     width: 4,
          //   }}></View>
          // }
          // ListFooterComponent={
          //   <View style={{
          //     width: 4,
          //   }}></View>
          // }
          renderItem={({ item, index }) => (
            <View style={ styles.instructionWrapper }>
              <View style={ styles.instructionContainer }>
                <Text style={ styles.instructionNumberContainer }>Step { index + 1 }</Text>
                <View style={ styles.instruction }>
                  <Text style={ styles.instructionText }>{ item }</Text>
                </View>
              </View>
            </View>
          )}
        />
        <ExpandingDot
          data={recipe.instructions}
          scrollX={ scrollX }
          inActiveDotOpacity={ 0.2 }
          activeDotColor={ '#36C464' }
          dotStyle={{
            flex: 1,
            maxHeight: 10,
            maxWidth: 10,
            borderRadius: 100,
            marginHorizontal: 5,
          }}
          slidingIndicatorStyle={{
            zIndex: 99,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
          }}
          containerStyle={{
            bottom: 0,
            padding: 8,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
      <View style={ styles.divider }></View>
      {recipe.nutrition != null ? (
        <View>
          <View style={ styles.nutritionContainer }>
            <View style={ [ styles.nutritionWrapper, tableStyles.container, tableStyles.border] }>
              <Text style={ tableStyles.title }>Nutrition</Text>
              {recipe.nutrition.map((nutri, index) => {
                return(
                  <View key={ index } style={ tableStyles.twoColumns }>
                    <Text style={ tableStyles.leftColumn }>{ nutri.name }</Text>
                    <Text style={ tableStyles.rightColumn }>{ nutri.amount }</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={ styles.divider }></View>
        </View>
      ) : (
        null
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  recipeContainer: {
    marginVertical: 4,
  },
  recipeBranchContainer: {
    marginVertical: 8,
  },
  divider: {
    backgroundColor: "#0002",
    height: 1,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  ingredientsContainer: {
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  ingredientsLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    paddingVertical: 4,
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
    textTransform: 'uppercase',
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#36C464',
    color: '#fff',
    elevation: 2,
    marginHorizontal: 12,
    maxWidth: 480,
    width: window.width - 32,
  },
  instructionWrapper: {
    width: window.width - 24,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    paddingBottom: 32,
    alignItems: 'center',
  },
  instructionContainer: {
    width: window.width - 32,
    alignItems: 'center',
    elevation: 2,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 8,
    flex: 1,
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
    minHeight: 200,
    paddingHorizontal: 24,
    width: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionText: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 16,
    paddingBottom: 24,
    maxWidth: 480,
  },
  nutritionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nutritionWrapper: {
    width: window.width - 32,
  },
});