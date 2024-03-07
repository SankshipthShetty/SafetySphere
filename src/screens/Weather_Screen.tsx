// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const WeatherScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Up-To-Date Weather only for youuuu :)</Text>
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

// export default WeatherScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { WEATHER_API } from '../../mapapi';



const WeatherScreen = () => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      // Fetch weather data
      const options = {
        method: 'GET',
        url: 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast',
        params: {
          location: '12.8666,74.9254',
          timesteps: '1h',
          units: 'metric'
        },
        headers: {
          'X-RapidAPI-Key': WEATHER_API,
          'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setCurrentWeather(response.data.timelines.hourly[0].values);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false); // Stop loading indicator regardless of success or failure
      }
    };

    // Fetch weather data initially
    fetchWeather();

    // Set up interval to fetch weather data every 2 hours
    const intervalId = setInterval(fetchWeather, 2 * 60 * 60 * 1000); // 2 hours

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    
    <View style={styles.container}>
      
      <Text style={styles.heading}>Weather Forecast</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
      <View>
        {currentWeather && (
          <>
            <WeatherInfoRow
              iconSource={require('../assets/icons/temperature.png')} 
              label="Temperature"
              value={`${currentWeather.temperature}°C`}
            />
            <WeatherInfoRow
              iconSource={require('../assets/icons/humidity.png')}
              label="Humidity"
              value={`${currentWeather.humidity}%`}
            />
            <WeatherInfoRow
              iconSource={require('../assets/icons/PrecipitationProbability.png')}
              label="Precipitation Probability"
              value={`${currentWeather.precipitationProbability}%`}
            />
            <WeatherInfoRow
              iconSource={require('../assets/icons/UV.png')}
              label="UV Index"
              value={currentWeather.uvIndex.toString()}
            />
            <WeatherInfoRow
              iconSource={require('../assets/icons/wind-direction.png')}
              label="Wind Direction"
              value={`${currentWeather.windDirection}°`}
            />
            <WeatherInfoRow
              iconSource={require('../assets/icons/wind-speed.png')}
              label="Wind Speed"
              value={`${currentWeather.windSpeed} m/s`}
            />
          </>
        )}
      </View>
      )}
    </View>
  );
};

const WeatherInfoRow = ({ iconSource , label, value }: { iconSource: any, label: string, value: string }) => (
  <View style={styles.infoContainer}>
    <Image source={iconSource} style={styles.icon} />
    <View style={styles.infoTextContainer}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoText}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f0f0f0',
    marginTop: -50,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    top:-20,
    color: 'black',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 6,
    marginLeft: 15,
    marginRight: 15,
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  infoTextContainer: {
    flex: 1,
    justifyContent: 'center',
    
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', 
  },
  infoText: {
    fontSize: 20,
    color:'black'
  },
});

export default WeatherScreen;