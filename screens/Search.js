import React from "react";
import { useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import FoodCard from "../assets/component/foodCard";
import window from "../assets/controller/window";
import PinoyFoods from "../assets/FoodsDB/foodsDB";
import globalStyles from "../assets/styles/globalStyles";

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function findMatches(wordToMatch, PinoyFoods) {
  return PinoyFoods.filter(food => {
    const regex = new RegExp(wordToMatch, 'gi');
    return food.name.match(regex) || food.tagalog.match(regex) || matchType(wordToMatch, food.type);
  });
}

function matchType(wordToMatch, type){
  const regex = new RegExp(wordToMatch, 'gi');
  for(let i = 0; i < type.length; i++) {
    if(type[i].match(regex)){
      return true;
    }
  }
}

export default function Search({ navigation, route }) {
  const [foods, setFoods] = useState(PinoyFoods);
  const [searchText, setSearchText] = useState(null);

  const onChange = (text) => {
    let word = text.split(/[^a-zA-Z\s-]/gi).join();
    setSearchText(word);
    setFoods(findMatches(word, PinoyFoods));
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={ styles.searchFieldContainer }>
          <Icon
            type="material-icons"
            name="search"
            color="#666"
            style={{
              marginHorizontal: 12,
            }}
          />
          <TextInput
            style={ styles.searchField }
            placeholder="Search..."
            onChangeText={ onChange }
            value={ searchText }
          ></TextInput>
        </View>
      ),
    });
  }, [navigation]);

  foods.sort(function(a, b) {
    return compareStrings(a.name, b.name);
  });

  return(
    <View style={ [globalStyles.screen] }>
      <FlatList
        styles={{ height: '100%' }}
        data={ foods }
        renderItem={({ item }) => (
          <FoodCard food={ item } navigation={ navigation } route={ route }/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchFieldContainer: {
    width: window.width - 32,
    paddingVertical: 4,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4040f018',
  },
  searchField: {
    textAlignVertical: 'center',
    paddingRight: 8,
    fontSize: 16,
    flex: 1,
    color: '#444',
  }
});