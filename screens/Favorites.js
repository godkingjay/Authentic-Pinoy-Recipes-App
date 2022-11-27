import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import FoodCard from "../assets/component/foodCard";
import { favoriteFoods } from "../assets/controller/query";
import globalStyles from "../assets/styles/globalStyles";

export default function Favorites({ navigation, route }) {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    favoriteFoods()
      .then(data => {
        setFoods(data);
      })
      .catch(error => {
        alert(error)
      });
  }, []);

  return(
    <View style={ globalStyles.screen }>
      <View>
        <FlatList
          showsVerticalScrollIndicator={ false }
          data={ foods }
          renderItem={({ item }) => (
            <FoodCard navigation={ navigation } route={ route } food={ item }/>
          )}
        />
      </View>
    </View>
  );
}