import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StyleSheet,Text,View} from 'react-native';
import LoginScreen from './src/screens/Login_Screen';
import RegisterScreen from './src/screens/Register_Screen';
import { PermissionsAndroid, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { requestLocationPermission } from './LocPermit';
import LiveLocationScreen from './src/screens/LiveLocation_Screen';
import DisasterSafetyScreen from "./src/screens/DisasterSafety_Screen";



const Stack=createNativeStackNavigator();

const App = () => {
useEffect(() => {
  requestLocationPermission(); 
}, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerTitleAlign: 'center',headerShown: true }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerTitleAlign: 'center',headerShown: true } }/>
        <Stack.Screen name="LiveLocation" component={LiveLocationScreen} options={{ headerTitleAlign: 'center',headerShown: false }}/>
        <Stack.Screen name="DisasterSafety" component={DisasterSafetyScreen} options={{ headerTitleAlign: 'center',headerShown: true }}/>
  
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({})

