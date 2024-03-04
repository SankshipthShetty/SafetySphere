import React, { useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { requestLocationPermission } from './LocPermit';

import HomeScreen from './src/screens/Home_Screen';
import DisasterSafetyScreen from './src/screens/DisasterSafety_Screen';
import EmergencyContactsScreen from './src/screens/EmergencyContacts_Screen';
import ProfileScreen from './src/screens/Profile_Screen';
import LiveLocationScreen from './src/screens/LiveLocation_Screen';
import WeatherScreen from './src/screens/Weather_Screen';
import SafetyMeasuresScreen from './src/screens/SafetyMeasures_Screen';
import SafePlacesScreen from './src/screens/SafePlace_Screen';

const App = () => {
  useEffect(() => {
    requestLocationPermission(); 
  }, []);
  
  const Stack = createNativeStackNavigator();

  function HomeStackScreen() {
    return (
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Live Location" component={LiveLocationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Weather" component={WeatherScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Safety Measures" component={SafetyMeasuresScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Safe Places" component={SafePlacesScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login"
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle:{
            position: 'absolute',
            bottom: 5,
            left: 5,
            right: 5,
            backgroundColor: 'white',
            borderTopEndRadius:20,
            borderTopLeftRadius:20,
            height: 60,
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('./src/assets/icons/home.png')}
                style={{ width: 50, height: 30 }}
              />
            ),
          }}
        />
        <Tab.Screen name="DisasterSafety" component={DisasterSafetyScreen} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('./src/assets/icons/disaster.png')}
                style={{ width: 35, height: 32 }}
              />
            ),
          }}
        />
        <Tab.Screen name="Emergency Contacts" component={EmergencyContactsScreen} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('./src/assets/icons/emergency.webp')}
                style={{ width: 35, height: 35 }}
              />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('./src/assets/icons/profile.png')}
                style={{ width: 56, height: 35 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
