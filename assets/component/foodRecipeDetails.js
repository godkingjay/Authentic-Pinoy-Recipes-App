import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import tableStyles from '../styles/tableStyles';

export default function FoodRecipeDetails({ details }){
  return(
    <View style={ [ tableStyles.container, tableStyles.border ] }>
      <Text style={ tableStyles.title }>Details</Text>
      {details.description != null ? (
        <Text style={ tableStyles.description }>{ details.description }</Text>
      ) : (
        null
      )}
      <View style={ tableStyles.twoColumns }>
        <Text style={ tableStyles.leftColumn }>Preparation Time</Text>
        <Text style={ tableStyles.rightColumn }>{ details.time.prep }</Text>
      </View>
      <View style={ tableStyles.twoColumns }>
        <Text style={ tableStyles.leftColumn }>Cooking Time</Text>
        <Text style={ tableStyles.rightColumn }>{ details.time.cook }</Text>
      </View>
      <View style={ tableStyles.twoColumns }>
        <Text style={ tableStyles.leftColumn }>Total Time</Text>
        <Text style={ tableStyles.rightColumn }>{ details.time.total }</Text>
      </View>
      <View style={ tableStyles.twoColumns }>
        <Text style={ tableStyles.leftColumn }>Serving</Text>
        <Text style={ tableStyles.rightColumn }>{ details.servings }</Text>
      </View>
      {details.calories != null ? (
        <View style={ tableStyles.twoColumns }>
          <Text style={ tableStyles.leftColumn }>Calories</Text>
          <Text style={ tableStyles.rightColumn }>{ details.calories }</Text>
        </View>
      ) : (
        null
      )}
    </View>
  );
}