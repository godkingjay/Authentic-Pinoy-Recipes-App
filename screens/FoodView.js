import React from "react";
import { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";

export default function FoodView({ navigation, route }){
  const [food, setFood] = useState(route.params);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: food.name
    });
  }, [navigation])
  
  return(
    <View>
      <Text>{ food.name }</Text>
    </View>
  );
}