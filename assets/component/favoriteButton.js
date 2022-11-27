import React from "react"
import { useState } from "react";
import { useContext } from "react"
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import AppContext from "../globals/appContext";

export default function FavoriteButton({ id }){
  const favorites = useContext(AppContext);

  const onPressHandler = () => {
    if(!favorites.favs.find((food) => food == id)){
      favorites.addFavorites(id);
    } else {
      favorites.deleteFavorites(id);
    }
  }

  if((favorites.favs.find((food) => food == id) ? true : false) == true){
    return(
      <TouchableOpacity
        activeOpacity={ 0.5 }
        onPress={ onPressHandler }
      >
        <Icon
          type="material-icons"
          name="favorite"
          color="#ff6060"
          size={ 48 }
        />
      </TouchableOpacity>
    );
  } else {
    return(
      <TouchableOpacity
        activeOpacity={ 0.5 }
        onPress={ onPressHandler }
      >
        <Icon
          type="material-icons"
          name="favorite-outline"
          color="#444"
          size={ 48 }
        />
      </TouchableOpacity>
    );
  }
}