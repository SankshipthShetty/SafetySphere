import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { TransitionPresets } from '@react-navigation/stack';
import {StyleSheet,Text,View} from 'react-native';
import LoginScreen from './src/screens/Login_Screen';
import RegisterScreen from './src/screens/Register_Screen';
import HomeScreen from './src/screens/Home_Screen';
import { StackScreenProps } from '@react-navigation/stack'; // Add missing import

const Stack=createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerTitleAlign: 'center',headerShown: true }} // Fix syntax error by wrapping options in curly braces
        />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerTitleAlign: 'center',headerShown: true } }/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitleAlign: 'center',headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({})
