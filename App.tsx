import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { requestLocationPermission } from './LocPermit';
import LoginScreen from './src/screens/Login_Screen';
import RegisterScreen from './src/screens/Register_Screen';
import HomeScreen from './src/screens/Home_Screen';
import DisasterSafetyScreen from './src/screens/DisasterSafety_Screen';
import EmergencyContactsScreen from './src/screens/EmergencyContacts_Screen';
import ProfileScreen from './src/screens/Profile_Screen';
import LiveLocationScreen from './src/screens/LiveLocation_Screen';
import WeatherScreen from './src/screens/Weather_Screen';
import SafetyMeasuresScreen from './src/screens/SafetyMeasures_Screen';
import SafePlaceScreen from './src/screens/SafePlace_Screen';
import HelplineScreen from './src/screens/Helpline_Screen';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    requestLocationPermission(); 
  }, []);
  
  const Stack = createNativeStackNavigator();

  function HomeStackScreen() {
    return (
      <Stack.Navigator initialRouteName="Login"> 
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Live Location" component={LiveLocationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Weather" component={WeatherScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Safety Measures" component={SafetyMeasuresScreen} options={{ headerShown: false }} />
       
        <Stack.Screen name="Helpline" component={HelplineScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SafePlacesScreen" component={SafePlaceScreen} options={{ headerShown: false }} />
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
            bottom: 0,
            left: 5,
            right: 5,
            backgroundColor: 'white',
            borderTopEndRadius:20,
            borderTopLeftRadius:20,
            // borderRadius: 20,
            height: 80,
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
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Tab.Screen name="DisasterSafety" component={DisasterSafetyScreen} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('./src/assets/icons/disaster.png')}
                style={{ width: 38, height: 43 }}
              />
            ),
          }}
        />
         <Tab.Screen name="Safety Measures" component={SafetyMeasuresScreen} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('./src/assets/icons/measures.png')}
                style={{ width: 38, height: 43 }}
              />
            ),
          }}
        />
        
        <Tab.Screen name="Emergency Contacts" component={EmergencyContactsScreen} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('./src/assets/icons/emergency-call.png')}
                style={{ width: 38, height: 43}}
              />
            ),
          }}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;


//-----------works but after login no bottom bar
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Image, ActivityIndicator } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { requestLocationPermission } from './LocPermit';
// import LoginScreen from './src/screens/Login_Screen';
// import RegisterScreen from './src/screens/Register_Screen';
// import HomeScreen from './src/screens/Home_Screen';
// import DisasterSafetyScreen from './src/screens/DisasterSafety_Screen';
// import EmergencyContactsScreen from './src/screens/EmergencyContacts_Screen';
// import ProfileScreen from './src/screens/Profile_Screen';
// import LiveLocationScreen from './src/screens/LiveLocation_Screen';
// import WeatherScreen from './src/screens/Weather_Screen';
// import SafetyMeasuresScreen from './src/screens/SafetyMeasures_Screen';
// import SafePlacesScreen from './src/screens/SafePlace_Screen';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     requestLocationPermission(); 
//   }, []);

//   const Stack = createNativeStackNavigator();

//   const MainNavigator = () => (
//     <Stack.Navigator initialRouteName="Home"> 
//       <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="Live Location" component={LiveLocationScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="Weather" component={WeatherScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="Safety Measures" component={SafetyMeasuresScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="Safe Places" component={SafePlacesScreen} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );

//   const AuthNavigator = () => (
//     <Stack.Navigator initialRouteName="Login"> 
//       <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );

//   const Tab = createBottomTabNavigator();

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <Tab.Navigator
//           screenOptions={{
//             tabBarShowLabel: true,
//             tabBarStyle: {
//               position: 'absolute',
//               bottom: 5,
//               left: 5,
//               right: 5,
//               backgroundColor: 'white',
//               borderTopEndRadius: 20,
//               borderTopLeftRadius: 20,
//               height: 60,
//             }
//           }}
//         >
//           <Tab.Screen
//             name="Home"
//             component={MainNavigator}
//             options={{
//               tabBarIcon: ({ focused, color, size }) => (
//                 <Image
//                   source={require('./src/assets/icons/home.png')}
//                   style={{ width: 50, height: 30 }}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen name="DisasterSafety" component={DisasterSafetyScreen} options={{
//               tabBarIcon: ({ focused, color, size }) => (
//                 <Image
//                   source={require('./src/assets/icons/disaster.png')}
//                   style={{ width: 35, height: 32 }}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen name="Emergency Contacts" component={EmergencyContactsScreen} options={{
//               tabBarIcon: ({ focused, color, size }) => (
//                 <Image
//                   source={require('./src/assets/icons/emergency.webp')}
//                   style={{ width: 35, height: 35 }}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen name="Profile" component={ProfileScreen} options={{
//               tabBarIcon: ({ focused, color, size }) => (
//                 <Image
//                   source={require('./src/assets/icons/profile.png')}
//                   style={{ width: 56, height: 35 }}
//                 />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       ) : (
//         <AuthNavigator />
//       )}
//     </NavigationContainer>
//   );
// }

// export default App;
//-------------------------------------


//-----------------doesnt work either-------------------------------------------------------
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Image, ActivityIndicator } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { requestLocationPermission } from './LocPermit';
// import LoginScreen from './src/screens/Login_Screen';
// import RegisterScreen from './src/screens/Register_Screen';
// import HomeScreen from './src/screens/Home_Screen';
// import DisasterSafetyScreen from './src/screens/DisasterSafety_Screen';
// import EmergencyContactsScreen from './src/screens/EmergencyContacts_Screen';
// import ProfileScreen from './src/screens/Profile_Screen';
// import LiveLocationScreen from './src/screens/LiveLocation_Screen';
// import WeatherScreen from './src/screens/Weather_Screen';
// import SafetyMeasuresScreen from './src/screens/SafetyMeasures_Screen';
// import SafePlacesScreen from './src/screens/SafePlace_Screen';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//   useEffect(() => {
//     requestLocationPermission(); 
//   }, []);
  
//   const Stack = createNativeStackNavigator();

//   const HomeStackScreen = () => {
//     return (
//       <Stack.Navigator initialRouteName="Login"> 
//         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Live Location" component={LiveLocationScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Weather" component={WeatherScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Safety Measures" component={SafetyMeasuresScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Safe Places" component={SafePlacesScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     );
//   }

//   const Tab = createBottomTabNavigator();
  
//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <Tab.Navigator
//           screenOptions={{
//             tabBarShowLabel: true,
//             tabBarStyle: {
//               position: 'absolute',
//               bottom: 5,
//               left: 5,
//               right: 5,
//               backgroundColor: 'white',
//               borderTopEndRadius: 20,
//               borderTopLeftRadius: 20,
//               height: 60,
//             }
//           }}
//         >
//           <Tab.Screen
//             name="Home"
//             component={HomeStackScreen}
//             options={{
//               tabBarIcon: ({ focused, color, size }) => (
//                 <Image
//                   source={require('./src/assets/icons/home.png')}
//                   style={{ width: 50, height: 30 }}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen name="DisasterSafety" component={DisasterSafetyScreen} options={{
//               tabBarIcon: ({ focused, color, size }) => (
//                 <Image
//                   source={require('./src/assets/icons/disaster.png')}
//                   style={{ width: 35, height: 32 }}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen name="Emergency Contacts" component={EmergencyContactsScreen} options={{
//               tabBarIcon: ({ focused, color, size }) => (
//                 <Image
//                   source={require('./src/assets/icons/emergency.webp')}
//                   style={{ width: 35, height: 35 }}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen name="Profile" component={ProfileScreen} options={{
//               tabBarIcon: ({ focused, color, size }) => (
//                 <Image
//                   source={require('./src/assets/icons/profile.png')}
//                   style={{ width: 56, height: 35 }}
//                 />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       ) : (
//         <HomeStackScreen />
//       )}
//     </NavigationContainer>
//   );
// }

// export default App;
