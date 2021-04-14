import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import HerosList from '../../components/HerosList';

const Home: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <HerosList />
    </View>
  );
};

export default Home;
