import React from "react"
import { useState } from "react";
import { useContext } from "react"
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import AppContext from "../globals/appContext";

export default function FavoriteButton({ id }){
  const favorites = useContext(AppContext);
  const [faved, setFaved] = useState(favorites.favs.find((food) => food == id) ? true : false);

  const onPressHandler = () => {
    if(!favorites.favs.find((food) => food == id)){
      favorites.addFavorites(id);
      setFaved(true);
    } else {
      favorites.deleteFavorites(id);
      setFaved(false);
    }
  }

  if(faved){
    return(
      <TouchableOpacity
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