import {gql} from '@apollo/client';
import Client from '../Client';
import {format} from 'date-fns';

import {storeData} from '../../function';

const today = format(new Date(), 'yyyy-MM-dd');

const POCSEARCH_QUERY = gql`
  query pocSearchMethod(
    $now: DateTime!
    $algorithm: String!
    $lat: String!
    $long: String!
  ) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
    }
  }
`;
const _pocSearch = (pos) => {
  console.log('retorno _pocSearch',String(pos.lat),  String(pos.lng));
  Client.query({
    query: POCSEARCH_QUERY,
    variables: {
      algorithm: 'NEAREST',
      lat: String(pos.lat),
      long: String(pos.lng),
      now: String(today),
    },
  })
    .then((result) => {
      if (result) {
        const {data} = result;
        const id = data.pocSearch.map((res) => res.id);
        console.log('gravo id',id.toString());
        storeData('poc_id', id.toString());
      }
    })
    .catch((err) => {
      console.log('Error', err);
    });
};

export {_pocSearch};
