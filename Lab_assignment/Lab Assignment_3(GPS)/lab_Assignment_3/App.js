import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const App = () => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });
  const [linkedLocation, setLinkedLocation] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          // const location = await Location.getCurrentPositionAsync({});
          // setRegion({
          //   ...region,
          //   latitude: location.coords.latitude,
          //   longitude: location.coords.longitude,
          // });
          // setLinkedLocation({
          //   latitude: location.coords.latitude,
          //   longitude: location.coords.longitude,
          // });
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
  }, []);
  const getCurrentLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (err) {
      console.warn(err);
    }
  };
  const linkLocation = () => {
    setLinkedLocation(coordinates);
    // setRegion({
    //   ...region,
    //   latitude: coordinates.latitude,
    //   longitude: coordinates.longitude,
    // });
  };
  const refereshLocation = () => {
    getCurrentLocation();
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} region={region}>
      {region &&  <Marker coordinate={{ latitude: region.latitude,
            longitude: region.longitude}} title="current" /> }
     

        {linkedLocation && (
          <Marker coordinate={linkedLocation} title="location" />
        )}
      </MapView>
      <View style={{ padding: 10 }}>
        <Text>Current Location:</Text>
        <Text>Latitude: {region.latitude}</Text>
        <Text>Longitude: {region.longitude}</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
          placeholder="Enter coordinates (lat, long)"
          onChangeText={(text) => {
            const [lat, long] = text.split(',').map((coord) => parseFloat(coord.trim()));
            setCoordinates({ latitude: lat, longitude: long });
          }}
        />
        <Button title="Link Location" onPress={linkLocation} />
        <Text></Text>
        <Button title="Referesh Current Location" onPress={refereshLocation} />

      </View>
    </View>
  );
};

export default App;
