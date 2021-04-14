import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { useSelector, Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';

import Header from './components/Header';
import Routes from './routes';
import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <View style={{ flex: 1 }}>
            <Header />
            <Routes />
          </View>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
