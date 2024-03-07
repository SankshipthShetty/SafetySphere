// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const SafePlaces = () => {
//   return (
//     <View style={styles.container}>
//       <Text>You are safe hear !</Text>
//       {/* Add your content for the Live Location screen here */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default SafePlaces;


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import { PLACES_API } from '../../mapapi';


export default function SafePlaceScreen() {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchNearbyPlaces = async () => {
      try {
        const response = await axios.get(
          PLACES_API
        );
 
        const sortedPlaces = response.data.features.sort((a: { properties: { distance: number; }; }, b: { properties: { distance: number; }; }) => {
          return a.properties.distance - b.properties.distance;
        });
        setPlaces(sortedPlaces);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching nearby places:', error);
        setLoading(false);
      }
    };

    fetchNearbyPlaces();
  }, []);

  const openInMaps = (lat:any, lon:any) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Safe Centres</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={places}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.placeContainer}
              onPress={() => openInMaps((item as any).properties.lat, (item as any).properties.lon)}
            >
              <Text style={styles.name}>{(item as any).properties.name}</Text>
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Latitude:</Text>
                <Text style={styles.value}>{(item as any).properties.lat}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Longitude:</Text>
                <Text style={styles.value}>{(item as any).properties.lon}</Text>
              </View>
              <Text style={styles.address}>Address: {(item as any).properties.formatted}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor:'azure',
    paddingBottom:80,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'midnightblue',
  },
  placeContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    
  },
  name: {
    color: 'darkred',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'midnightblue',
  },
  value: {
    fontSize: 20,
    marginLeft: 5,
    color: 'midnightblue',
  },
  address: {
    fontSize: 20,
    marginTop: 5,
    color: 'midnightblue',
  },
});