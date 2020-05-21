import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

const CardList = (props) => {
  return (
    <Card style={styles.container}>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: 'Image URL'}} />
          <Body>
            <Text style={styles.product}>{props.product}</Text>
            <Text note style={styles.price}>
              R${props.price}
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{uri: props.img}}
          style={{height: 200, width: null, flex: 1}}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent >
            <Text  style={styles.add}>Adicionar</Text>
          </Button>
        </Left>
        <Right>
          <Button transparent>
            <Text  style={styles.del}>Excluir</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  product: {
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 19,
  },
  price: {
    alignItems: 'center',
    marginTop: 8,
    fontSize: 16,
    color: '#2F4F4F',
    fontWeight: 'bold',
  },
  add:{
    fontWeight:'bold',
    fontSize:16,

  },
  del:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#CD5C5C',

  }
});

export default CardList;
