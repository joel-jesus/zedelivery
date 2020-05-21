import React from 'react';
import {Button} from 'react-native';


export default (props) => {
  return (
    <Button
      onPress={() => props.onClick(props.label)}
      title="Encontrar endereço"
      color="#f19"
    />
  );
};
