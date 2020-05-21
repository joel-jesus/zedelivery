import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar} from 'react-native-paper';

const Footer = (props) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title={props.title} />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Footer;
