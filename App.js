import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {location} from './src/services/Geocoder';

import {ApolloProvider} from '@apollo/client';
import Client from './src/services/Client';

import {_pocSearch} from './src/services/Poc';
import {getData} from './src/function';

import Search from './src/components/Search';
import Button from './src/components/Button';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

const App = () => {
  const [name, setname] = useState('');
  const [visible, setvisible] = useState(true);

  const _attemptGeocodeAsync = async () => {
    try {
      let result = await location(name);
      getData('pos').then((pc) => {
        _pocSearch(pc);
      });
      getData('produtos').then((pr) => {
        setvisible(false);
      });
    } catch (e) {
    } finally {
    }
  };

  return (
    <ApolloProvider client={Client}>
     
        <Header title="Procurar Endereço"/>

        <View style={styles.container}>
          <View>
            <Search
              icon="user-circle"
              placeholder="Digite Seu Endereço"
              value={name}
              onChangeText={(name) => setname({name})}
            />
          </View>

          <View style={styles.button}>
            <Button label="Teste" onClick={_attemptGeocodeAsync} />
          </View>
        </View>

      <Footer/>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 80,
  },
});

export default App;
