import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { Icon } from "react-native-elements";


export default function DiscoverSeeAll({ navigation, route, foodType }){
  return(
    <View style={ styles.seeAllWrapper }>
      <TouchableOpacity
        style={ styles.seeAllContainer }
        activeOpacity={ 0.75 }
        onPress={() => navigation.navigate('FoodCategory', foodType)}
      >
        <Text style={ styles.seeAllLabel }>See All</Text>
        <Icon
          type="material-icons"
          name="navigate-next"
          color="#ff4040"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  seeAllWrapper: {
  },
  seeAllContainer: {
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 64,
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    paddingLeft: 8,
  },
  seeAllLabel: {
    color: "#444",
    fontWeight: "bold",
  },
});