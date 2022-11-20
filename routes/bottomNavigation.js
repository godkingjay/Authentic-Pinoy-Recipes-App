import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverStack from "./DiscoverStack";
import CategoriesStack from "./CategoriesStack";
import Search from "../screens/Search";
import Favorites from "../screens/Favorites";
import Settings from "../screens/Settings";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function BottomNavigator(){
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="DiscoverStack"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#36C464",
          tabBarActiveBackgroundColor: "#0801",
          tabBarStyle: {
            height: 70,
          },
          tabBarItemStyle: {
            paddingVertical: 10
          }
        }}
      >
        <Tab.Screen name="DiscoverStack" component={ DiscoverStack }
          options={{
            title: "Discover",
            tabBarIcon: (props) => (
              <Icon type="ionicon" name="fast-food-outline" color={ props.color }/>
            )
          }}/>
        <Tab.Screen name="CategoriesStack" component={CategoriesStack}
          options={{
            title: "Categories",
            tabBarIcon: (props) => (
              <Icon type="material-icons" name="restaurant" color={ props.color }/>
            )
          }}/>
        <Tab.Screen name="Search" component={Search}
          options={{
            tabBarIcon: (props) => (
              <Icon type="material-icons" name="search" color={ props.color }/>
            )
          }}/>
        <Tab.Screen name="Favorites" component={Favorites}
          options={{
            title: "Favorites",
            tabBarIcon: (props) => (
              <Icon type="material-icons" name="favorite-outline" color={ props.color }/>
            )
          }}/>
        <Tab.Screen name="Settings" component={Settings}
          options={{
            title: "Settings",
            tabBarIcon: (props) => (
              <Icon type="material-icons" name="settings" color={ props.color }/>
            )
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}