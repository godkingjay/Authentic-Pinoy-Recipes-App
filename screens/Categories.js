import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import FoodCategoryCard from "../assets/component/foodCategoryCard";
import foodCategory from "../assets/FoodsDB/foodCategories";
import globalStyles from "../assets/styles/globalStyles";

export default function Categories({ navigation, route }) {
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            padding: 6,
            backgroundColor: "#2221",
            borderRadius: 100,
          }}
          activeOpacity={ 0.6 }
          onPress={() => navigation.navigate(`SearchStack`)}
        >
          <Icon type="material-icons" name="search" color="#222"/>
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  return(
    <ScrollView style={ globalStyles.screen }>
      <View style={ styles.categoryContainer }>
        <View
          style={{
            height: 12,
          }}
        ></View>
        {foodCategory.map(( item, index ) => {
          if(item.name == 'Default'){
            return(null);
          } else {
            return(
              <FoodCategoryCard key={ index } navigation={ navigation } route={ route } category={ item }/>
            );
          }
        })}
        <View
          style={{
            height: 8,
          }}
        ></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    paddingBottom: 4,
  }
});