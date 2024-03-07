import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}: {navigation:any}) => {
  //  const navigation = useNavigation();
  const route = useRoute(); 
  const { email, profilePhotoUrl } = route.params as any;

  const goToProfile = () => {
    navigation.navigate('Profile', { email: email, profilePhotoUrl: profilePhotoUrl });
  };

const EmergencyAssistance=()=>{
  navigation.navigate('Helpline');
}

  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={goToProfile} style={styles.profileButton}>
      <Image source={require('../assets/icons/noimage.png')} style={styles.profileImage} />
        </TouchableOpacity>
      <View style={styles.greetingContainer}>
      
        <Text style={styles.greeting}>Hey There!</Text>
      
        <Text style={styles.message}>We're here for you.</Text>
      </View>

     
      <View style={styles.cardContainer} >
      <TouchableOpacity onPress={() => {
                navigation.navigate("Helpline" as never)
            }}>
        <Text style={styles.cardTitle}>Emergency Assistance</Text>  
        </TouchableOpacity>   
      </View>
      

      <Text style={styles.heading}>One click away for all your Emergency Services.</Text>

      <TouchableOpacity onPress={() => {
                navigation.navigate("Live Location" as never)
            }}>
          <View style={[styles.cardContainerLarge, { backgroundColor: 'indianred' }]}>
            <Text style={styles.cardTitle}>Live Location</Text> 
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SafePlacesScreen')}>
          <View style={[styles.cardContainerLarge, { backgroundColor: 'rosybrown' }]}>
            <Text style={styles.cardTitle}>Safe Places</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
          <View style={[styles.cardContainerLarge, { backgroundColor: 'royalblue' }]}>
            <Text style={styles.cardTitle}>Weather Information</Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigation.navigate('Safety Measures')}>
          <View style={[styles.cardContainerLarge, { backgroundColor: 'teal' }]}>
            <Text style={styles.cardTitle}>Safety Measures</Text>
          </View>
        </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mintcream', // Light blue background
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  greetingContainer: {
    marginBottom: 12, 
    marginRight:60,
    top:-55,// Light blue background
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
    // Lighter blue container
    
     backgroundColor: 'maroon',
     height:'13%',
    borderRadius: 30,
    padding: 28,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom:0,
    top: -30,
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
    marginBottom: 30,
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
    marginTop: 5,
    marginBottom: 30,
    fontSize: 17,
    fontWeight:'bold',
    color: '#333'
  },
  profileButton: {
    width: 50,
    height: 50,
    right: '-85%',
    borderRadius: 30,
    backgroundColor: '#2E6E9E',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 7,
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
});

export default HomeScreen;
