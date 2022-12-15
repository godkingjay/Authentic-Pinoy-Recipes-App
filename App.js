import React from 'react';
import BottomNavigator from './routes/bottomNavigation';
import AppContext from './assets/globals/appContext';
import { useState } from 'react';
import { favoriteFoods } from './assets/controller/query';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const getData = async () => {
    try{
      const value = JSON.parse(await AsyncStorage.getItem('favorites'));
      // console.log(value);
      return value != null ? value : [];
    }
    catch(e){
      alert(e);
    }
  }

  const saveData = async (foodIds) => {
    try {
      const value = JSON.stringify(foodIds);
      await AsyncStorage.setItem('favorites', value);
    }
    catch (e){
      alert(e);
    }
  }

  const [favs, setFavs] = useState();
  const [foods, setFoods] = useState();
  
  useEffect(() => {
    getData()
      .then(data => {
        setFavs(data != null ? data : []);
        fetchFoods(data != null ? data : []);
      })
      .catch(error => {
        alert(error);
      })
  }, [])

  const fetchFoods = (favFoods) => {
    favoriteFoods(favFoods)
      .then(data => {
        setFoods(data);
      })
      .catch(error => {
        alert(error)
      })
  }

  const addFavorites = (id) => {
    const tempFavs = favs;
    if(!tempFavs.find((food) => food == id)){
      tempFavs.push(id);
    }
    setFavs(tempFavs);
    favoriteFoods(tempFavs)
        .then(data => {
          setFoods(data);
        })
        .catch(error => {
          alert(error)
        });
    saveData(tempFavs);
  }

  const clearFavorites = () => {
    const tempFavs = [];
    setFavs(tempFavs);
    favoriteFoods(tempFavs)
        .then(data => {
          setFoods(data);
        })
        .catch(error => {
          alert(error)
        });
    saveData(tempFavs);
  }

  const deleteFavorites = (id) => {
    const tempFavs = favs;
    const index = tempFavs.indexOf(id);
    if(index > -1){
      tempFavs.splice(index, 1);
    }
    setFavs(tempFavs);
    favoriteFoods(tempFavs)
      .then(data => {
      setFoods(data);
    })
    .catch(error => {
      alert(error)
    });
    saveData(tempFavs);
  }

  const favorites = {
    favs: favs,
    foods: foods,
    addFavorites,
    clearFavorites,
    deleteFavorites,
  }

  return (
    <AppContext.Provider value={ favorites }>
      <BottomNavigator />
    </AppContext.Provider>
  );
}