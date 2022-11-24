import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import FoodCategoryFoodCard from "../assets/component/foodCategoryFoodCard";
import { categoryFoods } from "../assets/controller/query";
import globalStyles from "../assets/styles/globalStyles";

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export default function FoodCategory({ navigation, route }){
  const [category, setCategory] = useState(route.params);
  const [foods, setFoods] = useState([]);
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: category
    });
  }, [navigation]);

  useEffect(() => {
    categoryFoods(category)
      .then(data => {
        setFoods(data);
      })
      .catch(error => {
        alert(error)
      });
  }, []);

  foods.sort(function(a, b) {
    return compareStrings(a.name, b.name);
  });

  return(
    <View style={ globalStyles.screen }>
      <FlatList
        data={ foods }
        renderItem={({ item }) => (
          <FoodCategoryFoodCard navigation={ navigation } route={ route } food={ item }/>
        )}
      />
    </View>
  );
}