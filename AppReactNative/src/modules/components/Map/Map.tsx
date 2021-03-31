import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Header } from '..';
import styles from './MapStyles';
import { StackParamsList } from '../../types';
import { StackRouters } from '../../../constans';

interface IPosition {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export const Map: React.FC = () => {
  const route = useRoute<RouteProp<StackParamsList, StackRouters.mapView>>();

  const { shippingAddress } = route.params;

  const position: IPosition = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.09222,
    longitudeDelta: 0.0421,
  };

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            ...position,
            latitude: shippingAddress.coordinates.latitude,
            longitude: shippingAddress.coordinates.longitude,
          }}
        />
        <Header />
      </View>
    </>
  );
};
