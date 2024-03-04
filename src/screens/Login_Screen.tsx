import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Button} from 'react-native';
import auth from "@react-native-firebase/auth";
import { Alert } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from "@react-native-google-signin/google-signin";

const LoginScreen = ({navigation}: {navigation: any}) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(()=>  {
    GoogleSignin.configure({
      webClientId:'149462374658-m0880804r9rdbgujjf84ropalre99d3v.apps.googleusercontent.com'
    });
  },[])

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    try{
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    console.log(idToken);
    Alert.alert("success login");
    navigation.navigate('Home');
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
    
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }
  
  


//   useEffect(()=>  {
//     const unsubscribe=auth().onAuthStateChanged(user=>{
//       if(user){
//       navigation.navigate('Home')
//     }
//   })
//   return unsubscribe;

// },[])


  const handleLogin=()=>{ 
    auth().signInWithEmailAndPassword(email,password).then(userCredentials=>{
      const user=userCredentials.user
      navigation.navigate('LiveLocation')
      console.log(user.email);})
      .catch(error => {
        let errorMessage = 'An error occurred';
        if (error.code === 'auth/wrong-password') {
          errorMessage = 'Incorrect password';
        } else {
          errorMessage = error.message;
        }
        Alert.alert('Login Error', errorMessage);
        });
    }

  const handleRegister = () => {  
    navigation.navigate('Register');
  };
 
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <Text style={styles.logo}>SafetySphere</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#a9a9a9"
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    
      
      <TouchableOpacity
        onPress={onGoogleButtonPress}
        style={[styles.button, styles.googleButton]}
      >
        <Text style={[styles.buttonText, styles.googleButtonText]} >Sign in with Google</Text>
      </TouchableOpacity>

      <View style={styles.registerTextContainer}>
        <Text style={styles.registerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={[styles.registerText, styles.registerLink]}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Light background color
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#007bff', // Logo color
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: '#007bff', // Primary button color
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white', // Button text color
    fontWeight: 'bold',
    fontSize: 18,
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007bff', // Border color for register button
  },
  registerButtonText: {
    color: '#007bff', // Text color for register button
  },
  googleButton: {
    backgroundColor: '#007bff', // Google button color
  },
  googleButtonText: {
    color: 'white', // Text color for Google button
  },
  registerTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  registerText: {
    color: 'black',
  },
  registerLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
export default LoginScreen;

