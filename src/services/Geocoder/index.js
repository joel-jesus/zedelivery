import Geocoder from 'react-native-geocoding';
import {storeData} from '../../function'

Geocoder.init('', {language: 'pt-BR'});

const location = (adress) => {
  console.log('endereço', adress)
  Geocoder.from(adress.name)
    .then((json) => {
      let location = json.results[0].geometry.location;
      
      storeData('pos', location);
    })
    .catch((error) => console.warn('erro na api',error));
};

export {location};
