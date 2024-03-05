import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { firestore } from '../../index.js';
import { query, where,doc, getDoc, getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ProfileScreen() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
 
  const route = useRoute(); 
  const navigation = useNavigation();
  const { email, profilePhotoUrl } = route.params as any;
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userQuery = query(collection(firestore,'Users'), where("Email", "==", email));
        const querySnapshot = await getDocs(userQuery);
        querySnapshot.forEach((doc) => {
          setUser({ id: doc.id, ...(doc.data() as any) });
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [email]);

  const handleSignOut = () => {
    navigation.navigate('Login' as never);
    console.log("Signed Out")
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {user && (
       <View style={styles.profileContainer}>
       <View style={styles.profilePictureContainer}>
         <Image
           style={styles.profilePicture}

           source={profilePhotoUrl ? { uri: profilePhotoUrl } : require('../assets/icons/noimage.png')}
           resizeMode="cover" // Use the profilePhotoUrl here
         />
       </View>
          <View style={styles.detailContainer}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.info}>{(user as any).Email}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.info}>{(user as any).Age}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.label}>Blood Group:</Text>
            <Text style={styles.info}>{(user as any).BloodGroup}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.info}>{(user as any).Gender}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.label}>Phone No:</Text>
            <Text style={styles.info}>{(user as any).PhoneNo}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.label}>Emergency Contacts:</Text>
            <Text style={styles.info}>{(user as any).EmergencyContact}</Text>
          </View>
          <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profileContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    width: '80%',
    alignItems: 'center',
  },
  profilePictureContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    marginRight: 5,
  },
  info: {
    fontSize: 16,
    color: 'black',
  },
  signOutButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  signOutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
