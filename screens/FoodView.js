import React from "react";
import { useState } from "react";
import { Linking, StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import globalStyles from "../assets/styles/globalStyles";
import window from "../assets/controller/window";
import { ScrollView } from "react-native";
import FoodViewType from "../assets/component/foodViewType";
import { Icon } from "react-native-elements";
import FoodRecipe from "../assets/component/foodRecipe";
import FavoriteButton from "../assets/component/favoriteButton";

export default function FoodView({ navigation, route }) {
  const [food, setFood] = useState(route.params);
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: food.name,
    });
  }, [navigation]);

  return (
    <ScrollView style={ globalStyles.screen }>
      <Image source={ food.image } style={ styles.image } />
      <View style={ styles.articleContainer }>
        <View style={ styles.article }>
          <View style={ styles.foodHeaderContainer }>
            <View style={ styles.foodNameContainer }>
              <Text style={ styles.foodName }>{ food.name }</Text>
              <Text style={ styles.foodTagalog }>({ food.tagalog })</Text>
            </View>
            <View style={ styles.foodButtonsContainer }>
              <FavoriteButton id={ food.id }/>
            </View>
          </View>
          <View style={ styles.divider }></View>
          <Text style={ styles.foodDescription }>{ food.description }</Text>
          <View style={ styles.divider }></View>
          <View style={ styles.foodSocials }>
            <View style={ styles.foodSocialLogo }>
              <Icon size={ 24 } color="#444" type="material-icons" name="public" onPress={() => Linking.openURL(food.link)}/>
            </View>
            <View style={ styles.foodSocialLogo }>
              <Icon size={ 24 } color="#444" type="ionicon" name="logo-youtube" onPress={() => Linking.openURL(food.video)}/>
            </View>
          </View>
          <Text style={ styles.foodAuthor }>Recipe By: { food.author }</Text>
          <View style={ styles.divider }></View>
          <ScrollView
            horizontal={ true }
            style={ styles.foodTypesContainer }
          >
            { food.type.map((type, index) => {
              return(
                <FoodViewType key={ index } navigation={ navigation } route={ route } foodType={ type }/>
              )
            })}
          </ScrollView>
          <View style={ styles.divider }></View>
          <FoodRecipe recipe={ food.recipe }/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: window.width / 1.5,
    width: window.width,
    maxHeight: window.height / 2,
    resizeMode: "cover",
  },
  articleContainer: {
    marginTop: -64,
    paddingTop: 32,
    flex: 1,
  },
  article: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    elevation: 32,
    flex: 1,
    paddingBottom: window.height/4,
  },
  foodHeaderContainer: {
    flexDirection: "row",
  }, 
  foodNameContainer: {
    flex: 1,
    paddingLeft: 4
  },
  foodName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
  },
  foodTagalog: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: -4,
    color: "#444",
  },
  foodButtonsContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  foodSocials: {
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 8,
  },
  foodSocialLogo: {
    marginHorizontal: 8
  },
  foodAuthor: {
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'italic',
    color: "#444",
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: "#0002",
    height: 1,
    width: "100%",
    marginVertical: 8,
  },
  foodDescription: {
    textAlign: "justify",
    fontSize: 16,
    marginVertical: 8
  },
  foodTypesContainer: {
    marginVertical: 4,
  },
});
