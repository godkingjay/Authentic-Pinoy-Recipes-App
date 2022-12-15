import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import FoodCard from "../assets/component/foodCard";
import { categoryFoods } from "../assets/controller/query";
import window from "../assets/controller/window";
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
      headerTitle: category,
      // headerTitleAlign: 'center',
    });
  }, [navigation, category]);

  useEffect(() => {
    categoryFoods(category)
      .then(data => {
        setFoods(data);
      })
      .catch(error => {
        alert(error)
      });
  }, [category]);

  foods.sort(function(a, b) {
    return compareStrings(a.name, b.name);
  });

  return(
    <View style={ globalStyles.screen }>
      <View>
        <FlatList
          showsVerticalScrollIndicator={ false }
          data={ foods }
          ListHeaderComponent={() => (
            <View
              style={{
                height: 12,
              }}
            ></View>
          )}
          ListFooterComponent={() => (
            <View
              style={{
                height: 12,
              }}
            ></View>
          )}
          renderItem={({ item }) => (
            <FoodCard navigation={ navigation } route={ route } food={ item }/>
          )}
        />
      </View>
    </View>
  );
}