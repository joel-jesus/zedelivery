import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import Header from '../../components/Header';
import CardList from './../../components/Card';
import {getData} from '../../function';

const Product = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    getData('product').then((p) => {
      setproduct(p);
    });
  });

  return (
    <View>
      <Header title="Produtos" />
      <FlatList
        data={product}
        renderItem={({item}) => (
          <CardList product={item.title} price={item.price} img={item.image} />
        )}
      />
    </View>
  );
};

export default Product;
