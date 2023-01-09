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

function findMatches(wordToMatch, foods) {
  return foods.filter(food => {
    const regex = new RegExp(wordToMatch, 'gi');
    if (food.name.match(regex) || food.tagalog.match(regex)) return true;
    else if (matchType(wordToMatch, food.type)) return true;
    else if (matchSpecial(wordToMatch, food.special)) return true;
    else if (matchKeywords(wordToMatch, food.keywords)) return true;
    else return false;
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

function matchSpecial(wordToMatch, special){
  if(special == null) return false;
  const regex = new RegExp(wordToMatch, 'gi');
  for(let i = 0; i < special.length; i++) {
    if(special[i].match(regex)){
      return true;
    }
  }
}

function matchKeywords(wordToMatch, keywords){
  if(keywords == null) return false;
  const regex = new RegExp(wordToMatch, 'gi');
  for(let i = 0; i < keywords.length; i++) {
    if(keywords[i].match(regex)){
      return true;
    }
  }
}

export default function Search({ navigation, route }) {
  const [foods, setFoods] = useState(PinoyFoods.sort((a, b) => {
    return compareStrings(a.name, b.name);
  }));
  const [searchText, setSearchText] = useState(null);

  const onChange = (string) => {
    let word = string.replace(/[^a-zA-Z -]/g, '');
    setSearchText(word);
    if(word.length > 0) setFoods(findMatches(word, PinoyFoods));
    else setFoods(PinoyFoods.sort((a, b) => {
      return compareStrings(a.name, b.name);
    }));
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
            keyboardType={ "email-address" }
            placeholder="Search..."
            onChangeText={ onChange }
            value={ searchText }
          ></TextInput>
        </View>
      ),
    });
  }, [navigation, searchText]);

  return(
    <View style={ globalStyles.screen }>
      { foods.length >= 1 ? (
        <FlatList
          persistentScrollbar={ true }
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
            <FoodCard food={ item } navigation={ navigation } route={ route }/>
          )}
        />
      ) : (
        <View style={ styles.emptyContainer }>
          <Icon
            type="material-icons"
            name="search"
            size={ window.width/3 > 240 ? 240 : window.width/3 }
            color="#bbb"
          />
          <View style={ styles.emptyLabelContainer }>
            <Text style={ styles.emptyLabel }>No Search Results!</Text>
            <Text style={ styles.emptyLabelDetails }>
              Please search a food name or category!
            </Text>
          </View>
        </View>
      )}
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
    backgroundColor: '#4080f018',
  },
  searchField: {
    textAlignVertical: 'center',
    paddingRight: 8,
    fontSize: 16,
    flex: 1,
    color: '#444',
  },
  emptyContainer: {
    padding: 32,
    height: window.height/3 + 16,
    maxHeight: 480,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyLabelContainer: {
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyLabel: {
    fontSize: window.width/20 > 32 ? 32 : window.width/20,
    fontWeight: 'bold',
    color: '#888'
  },
  emptyLabelDetails: {
    textAlign: 'center',
    marginVertical: 8,
    color: '#aaa',
    fontSize: window.width/32 > 24 ? 24 : window.width/32,
    width: window.width/1.5,
    maxWidth: 480,
  },
});