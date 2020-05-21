import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {location} from '../../services/Geocoder';

import {ApolloProvider} from '@apollo/client';
import Client from '../../services/Client';

import {_pocSearch} from '../../services/Poc';
import {_poc} from '../../services/Product';
import {getData} from '../../function';

import Search from '../../components/Search';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from '../../../src/screen/Product';

const Home = () => {
  const [name="", setname] = useState("");
  const [visible, setvisible] = useState(true);

  const _attemptGeocodeAsync = async () => {
      const loc = await location(name)
    try {
       getData('pos').then((pc) => {
        _pocSearch(pc);
      });

      getData('poc_id').then((id) => {
        _poc(id);
        setvisible(false);
      });
      
     
    } catch (e) {
    } finally {
    }
  };

  return (
    <ApolloProvider client={Client}>
      {visible ? (
        <View style={styles.container}>
          <Header title="HOME" />
          <Search
            icon="location-arrow"
            placeholder="Digite Seu Endereço"
            value={name}
            onChangeText={(name) => setname({name})}
          />
          <View style={styles.button}>
            <Button label="Buscar" onClick={_attemptGeocodeAsync} />
          </View>
          <Footer />
        </View>
      ) : (
        <Product />
      )}
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

export default Home;
