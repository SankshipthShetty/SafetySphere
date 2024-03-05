 import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {getFirestore} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import {initializeApp} from "firebase/app";
import 'firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import {firestore} from '../../index.js';
import { addDoc, collection } from "firebase/firestore";
import auth from "@react-native-firebase/auth";
import { Alert } from 'react-native';



const RegisterScreen = ({navigation}:{navigation:any}) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [password, setPassword] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const[gender,setG]=useState('');

  const handleRegister = () => {
    addDoc(collection(firestore, "Users"), {
      Email: email,
      PhoneNo: phoneNumber,
      Age: age,
      BloodGroup: bloodGroup,
      Password: password,
      EmergencyContact: emergencyContact,
      Gender: gender,
    }).then(() => {
      console.log('data submitted')


    navigation.navigate('Home', { userData: { email, phoneNumber, age, bloodGroup, emergencyContact, gender } })
    }).catch((error) => {
      console.log(error);
    });

    auth().createUserWithEmailAndPassword(email,password).then(userCredentials=>{
      const user=userCredentials.user;
    console.log(user.email);
    })
       .catch(error=>console.log(error.message)) 
   
  }

  const handleLogin = () => {
    navigation.navigate('Login');
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <Text style={styles.title}>Register</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          style={styles.input}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={text => setAge(text)}
          style={styles.input}
          placeholderTextColor="#a9a9a9"
        />
         <TextInput
          placeholder="Gender"
          value={gender}
          onChangeText={text => setG(text)}
          style={styles.input}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          placeholder="Blood Group"
          value={bloodGroup}
          onChangeText={text => setBloodGroup(text)}
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
        <TextInput
          placeholder="Emergency Contact Number (Parents/Friends)"
          value={emergencyContact}
          onChangeText={text => setEmergencyContact(text)}
          style={styles.input}
          placeholderTextColor="#a9a9a9"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        onPress={handleRegister}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogin}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText} >Back to Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // Light background color
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff', // Title color
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
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default RegisterScreen;
