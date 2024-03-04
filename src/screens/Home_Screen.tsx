import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Hey There!</Text>
        <Text style={styles.message}>We're here for you.</Text>
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Emergency Assistance</Text>     
      </View>

      <Text style={styles.heading}>One click away for all your Emergency Services.</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Live Location')}>
          <View style={[styles.cardContainerLarge, { backgroundColor: 'indianred' }]}>
            <Text style={styles.cardTitle}>Live Location</Text> 
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Safe Places')}>
          <View style={[styles.cardContainerLarge, { backgroundColor: 'rosybrown' }]}>
            <Text style={styles.cardTitle}>Safe Places</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
          <View style={[styles.cardContainerLarge, { backgroundColor: 'royalblue' }]}>
            <Text style={styles.cardTitle}>Weather Information</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Safety Measures')}>
          <View style={[styles.cardContainerLarge, { backgroundColor: 'teal' }]}>
            <Text style={styles.cardTitle}>Safety Measures</Text>
          </View>
        </TouchableOpacity>

        

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mintcream', // Light blue background
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  greetingContainer: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 30,
    fontFamily: 'Arial', 
    color: '#2E6E9E', // Dark blue text color
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 20,
    fontFamily: 'Arial',
    color: '#333',
  },
  cardContainer: {
    backgroundColor: 'maroon', // Lighter blue container
    borderRadius: 30,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  cardContainerLarge: {
    backgroundColor: '#72A8BC', // Blueish color
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
    height: 90,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // White text color
    textAlign: 'center',
  },  
  heading: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 15,
    color: '#333'
  }
});

export default HomeScreen;
