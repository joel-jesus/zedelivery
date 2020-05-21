import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const Header = (props) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={props.title} style={styles.title}/>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  title: {
   flex: 1,
   alignItems: 'center'
  },
});

export default Header;
