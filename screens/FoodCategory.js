import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { categoryFoods } from "../assets/controller/query";
import globalStyles from "../assets/styles/globalStyles";

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

  return(
    <View style={ globalStyles.screen }>
      <FlatList
        data={ foods }
        renderItem={({ item }) => (
          <View>
            <Text>{ item.name }</Text>
          </View>
        )}
      />
    </View>
  );
}