import React from 'react';
import BottomNavigator from './routes/BottomNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContext from './assets/globals/appContext';

import globalStyles from './assets/styles/globalStyles';
import { useState } from 'react';
import { addFav, deleteFav, fetchFav } from './assets/FoodsDB/favFoodDB';

export default function App() {

  const [favs, setFavs] = useState(fetchFav);

  const addFavorites = (id) => {
    addFav(id);
    setFavs(fetchFav);
  }

  const deleteFavorites = (id) => {
    deleteFav(id);
    setFavs(fetchFav);
  }

  const favorites = {
    favs: favs,
    addFavorites,
    deleteFavorites,
  }

  return (
    <AppContext.Provider value={ favorites }>
      <BottomNavigator />
    </AppContext.Provider>
  );
}