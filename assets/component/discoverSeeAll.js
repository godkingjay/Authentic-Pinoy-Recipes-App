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
        activeOpacity={ 0.5 }
        onPress={() => navigation.push('FoodCategory', foodType)}
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
    borderWidth: 0.5,
    borderColor: "#4441",
    borderRadius: 64,
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    paddingLeft: 8,
    elevation: 2,
  },
  seeAllLabel: {
    color: "#444",
    fontWeight: "bold",
  },
});