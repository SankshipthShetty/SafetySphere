// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// export default function EmergencyContactsScreen() {
 
//   const [showText, setShowText] = useState(false);

//   const toggleText = () => {
//     setShowText(!showText);
//   };
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={toggleText}>
//         <Text style={styles.buttonText}>Toggle Text</Text>
//       </TouchableOpacity>
//       {showText && (
//         <Text style={styles.text}>EmergencyContacts_Screen</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'black',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const EmergencyContactsScreen = () => {
//   const emergencyContacts = [
//     { name: 'Emergency Service', number: '911' },
//     { name: 'Hospital', number: '123-456-7890' },
//     { name: 'Police Station', number: '987-654-3210' },
//     { name: 'Fire Department', number: '111-222-3333' },
//     { name: 'Family Doctor', number: '555-555-5555' },
//     { name: 'Close Friend', number: '999-999-9999' },
//     // Add more contacts as needed
//   ];

//   return (
//     <View style={styles.container}>
//       {emergencyContacts.map((contact, index) => (
//         <View key={index} style={styles.contactContainer}>
//           <Text style={styles.contactName}>{contact.name}</Text>
//           <Text style={styles.contactNumber}>{contact.number}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     justifyContent: 'center',
//   },
//   contactContainer: {
//     backgroundColor: '#e3e3e3',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//   },
//   contactName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   contactNumber: {
//     fontSize: 16,
//   },
// });

// export default EmergencyContactsScreen;


// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const EmergencyContactsScreen = () => {
//   const emergencyContacts = [
//     { name: 'Emergency Service', number: '911' },
//     { name: 'Hospital', number: '123-456-7890' },
//     { name: 'Police Station', number: '987-654-3210' },
//     { name: 'Fire Department', number: '111-222-3333' },
//     { name: 'Family Doctor', number: '555-555-5555' },
//     { name: 'Close Friend', number: '999-999-9999' },
//     // Add more contacts as needed
//   ];

//   const communityForums = [
//     { name: 'Community Forum 1' },
//     { name: 'Community Forum 2' },
//     { name: 'Community Forum 3' },
//     // Add more community forums as needed
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Emergency Contacts</Text>
//       {emergencyContacts.map((contact, index) => (
//         <View key={index} style={styles.contactContainer}>
//           <Text style={styles.contactName}>{contact.name}</Text>
//           <Text style={styles.contactNumber}>{contact.number}</Text>
//         </View>
//       ))}
      
//       <Text style={styles.heading}>Community Forums</Text>
//       {communityForums.map((forum, index) => (
//         <View key={index} style={styles.forumContainer}>
//           <Image source={require('../assets/icons/noimage.png')} style={styles.forumIcon} />
//           <Text style={styles.forumName}>{forum.name}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   contactContainer: {
//     backgroundColor: '#e3e3e3',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//   },
//   contactName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   contactNumber: {
//     fontSize: 16,
//   },
//   forumContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e3e3e3',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//   },
//   forumIcon: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
//   forumName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default EmergencyContactsScreen;


import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EmergencyContactsScreen = () => {
  const emergencyContacts = [
    { name: 'Sankshipth', number: '98522367425' },
    { name: 'Aparna', number: '8844557523' },
    { name: 'Ranbir', number: '9876543210' },
    { name: 'Alia', number: '7134120853' },
    { name: 'Family Doctor', number: '9858258630' },
    { name: 'Close Friend', number: '7521036005' },

    // Add more contacts as needed
  ];

  const communityForums = [
    { name: 'Community Forum 1' },
    { name: 'Community Forum 2' },
    
    // Add more community forums as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Community Forums</Text>
      {communityForums.map((forum, index) => (
        <View key={index} style={styles.forumContainer}>
          <Image source={require('../assets/icons/noimage.png')} style={styles.forumIcon} />
          <Text style={styles.forumName}>{forum.name}</Text>
        </View>
      ))}


<Text style={styles.heading}>Friends & Family</Text>

<View style={styles.container}>
      {emergencyContacts.map((contact, index) => (
        <View key={index} style={styles.contactContainer}>
          <Image
            source={require('../assets/icons/profile.png')}
            style={styles.contactImage}
          />
          <View style={styles.contactDetails}>
            <Text style={styles.contactName}>{contact.name}</Text>
            <Text style={styles.contactNumber}>{contact.number}</Text>
          </View>
        </View>
      ))}
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1,
    marginTop:5,
    color:'black',
    marginLeft:10,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    
  },
  contactImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
 
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  contactNumber: {
    fontSize: 16,
    color:'black'
  },
  forumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    margin:7,
    marginVertical: 5,
    borderRadius: 10,
    height:'8%',
  },
  forumIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  forumName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black',
  },
  contactDetails: {
    flex: 1,
  },

});

export default EmergencyContactsScreen;
