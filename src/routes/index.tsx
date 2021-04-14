import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

const HomeNavgation = createStackNavigator();

const HomeRoutes: React.FC = () => (
  <HomeNavgation.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'white' },
    }}
  >
    <HomeNavgation.Screen name="Home" component={Home} />
    <HomeNavgation.Screen name="Favorites" component={Favorites} />
  </HomeNavgation.Navigator>
);

export default HomeRoutes;
