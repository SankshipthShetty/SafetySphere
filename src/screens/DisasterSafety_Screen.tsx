import React, { useState, useEffect ,} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default function DisasterSafetyScreen() {
  const [disasters, setDisasters] = useState([]);
  const [isSafe, setIsSafe] = useState(true); // Default to true
  const [earthquakes, setEarthquakes] = useState([]);
  const [nearestEarthquake, setNearestEarthquake] = useState<{ location: string, magnitude: number } | null>(null);
  useEffect(() => {
    fetchData();
    checkDisasterZone();
  }, []);

  useEffect(() => {
    if (earthquakes.length > 0) {
      setNearestEarthquake(earthquakes[0]); // Assuming earthquakes array is sorted by proximity
    }
  }, [earthquakes]);

  
  const fetchData = async () => {
    try {
      const response = await axios.get('https://eonet.gsfc.nasa.gov/api/v2.1/events');
      const { events } = response.data;
      setDisasters(events);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const checkDisasterZone = async () => {
    try {
        const response = await axios.get('https://everyearthquake.p.rapidapi.com/recentEarthquakes', {
          params: {
            interval: 'P1Y2M3W4DT1H2M3S',
            start: '1',
            count: '100',
            type: 'earthquake',
            latitude: '2.718236',
            longitude: '99.155957',
            radius: '1000',
            units: 'miles',
            magnitude: '3',
            intensity: '1'
          },
          headers: {
            'X-RapidAPI-Key': '3428468d77mshcb4a58176bb7223p1cc61fjsn3ab39738813b',
            'X-RapidAPI-Host': 'everyearthquake.p.rapidapi.com'
          }
        });

const earthquakes = response.data.data;
    console.log('earthquakes:', earthquakes);
 const hasRecentEarthquakes = earthquakes.length > 0;
  
    setEarthquakes(earthquakes);
    setIsSafe(!hasRecentEarthquakes); 
    console.log('hasRecentEarthquakes:', hasRecentEarthquakes);
    
      } catch (error) {
        console.error('Error checking earthquakes:', error);
        setIsSafe(false); // Assume not safe if there's an error
      }
    };

  return (
    <View style={styles.container}>
           <View style={styles.alertContainer}>
        <Text style={styles.alertText}>{isSafe ? 'You are safe' : `You are not safe! \nNearest Earthquake: ${nearestEarthquake?.location}, Magnitude: ${nearestEarthquake?.magnitude}`}</Text>
        </View>
         <View style={styles.mapcontainer}>  
      <MapView style={styles.map}>
      {disasters.map((disaster: {
                description: string | undefined;
                title: string | undefined;
                 geometries: any; id: string 
        
       }) => (<Marker 
            key={disaster.id}
            coordinate={{
              latitude: disaster.geometries[0].coordinates[1],
              longitude: disaster.geometries[0].coordinates[0],
            }}
            title={disaster.title}
            description={disaster.description}
          >
          </Marker>
          
        ))}
        {earthquakes.map((earthquake: { latitude: string, longitude: string, location: string, magnitude: number }, index: number) => (
           
           <Marker
                key={index}
                coordinate={{
                    latitude: parseFloat(earthquake.latitude),
                    longitude: parseFloat(earthquake.longitude),
                }}
                title={earthquake.location}
                description={`Magnitude: ${earthquake.magnitude}`}
            />
        ))}
      </MapView>
      
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f0', // Background color
  },
  alertContainer: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    width: '95%',
    height: '15%',
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  alertText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  mapcontainer: {
    width: '95%',
    height: '80%',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
