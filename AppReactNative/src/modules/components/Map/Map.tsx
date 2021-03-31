import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { View } from 'react-native';
import { Header, ModalWindow } from '..';
import styles from './MapStyles';

interface IPosition {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export const Map: React.FC = () => {
  const initialPosition: IPosition = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.09222,
    longitudeDelta: 0.0421,
  };

  const [currentPosition, setCurrentPosition] = useState<IPosition>(
    initialPosition,
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { longitude, latitude } = position.coords;

        setCurrentPosition(currentPos => ({
          ...currentPos,
          longitude,
          latitude,
        }));
      },
      () => {
        setIsModalVisible(true);
      },
    );
  }, []);

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={currentPosition}
        />
        <Header />
      </View>
      <ModalWindow
        modalType="error"
        description="Something went wrong!"
        buttonTitle="Close"
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        isCustomButtonVisible
      />
    </>
  );
};
