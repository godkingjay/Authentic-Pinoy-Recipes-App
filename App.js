import React from 'react';
import BottomNavigator from './routes/BottomNavigation';
import AppContext from './assets/globals/appContext';

import globalStyles from './assets/styles/globalStyles';
import { useState } from 'react';
import { addFav, clearFav, deleteFav, fetchFav } from './assets/FoodsDB/favFoodDB';
import { favoriteFoods } from './assets/controller/query';
import { useEffect } from 'react';

export default function App() {

  const [favs, setFavs] = useState(fetchFav);
  const [foods, setFoods] = useState();

  useEffect(() => {
    favoriteFoods()
      .then(data => {
        setFoods(data);
      })
      .catch(error => {
        alert(error)
      });
  }, []);

  const addFavorites = (id) => {
    addFav(id);
    setFavs(fetchFav);
    favoriteFoods()
        .then(data => {
          setFoods(data);
        })
        .catch(error => {
          alert(error)
        });
  }

  const clearFavorites = () => {
    clearFav();
    setFavs(fetchFav);
    favoriteFoods()
        .then(data => {
          setFoods(data);
        })
        .catch(error => {
          alert(error)
        });
  }

  const deleteFavorites = (id) => {
    deleteFav(id);
    setFavs(fetchFav);
    favoriteFoods()
      .then(data => {
      setFoods(data);
    })
    .catch(error => {
      alert(error)
    });
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