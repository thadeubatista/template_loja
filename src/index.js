import React from 'react';
import {Text, View, ScrollView} from 'react-native';

// import { Container } from './styles';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProducList';
import Tabs from './components/Tabs';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f8f8fa'}}>
      <Header />
      <SubHeader />
      <ScrollView>
        <ProductList />
      </ScrollView>
      <Tabs />
    </View>
  );
};
export default App;
