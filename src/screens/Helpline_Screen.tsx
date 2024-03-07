// import React from 'react';
// import { View, Text, TouchableOpacity, Linking, Alert, StyleSheet } from 'react-native';
// import { ScrollView } from 'react-native';

// const HelplineScreen = () => {
//   const callHelpline = (number:any) => {
//     Alert.alert(
//       'Confirm Call',
//       `Are you sure you want to call ${number}?`,
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'Call',
//           onPress: () => {
//             Linking.openURL(`tel:${number}`);
//           },
//         },
//       ]
//     );
//   };

//   const getColorByTitle = (title:any) => {
//     switch (title.toLowerCase()) {
//       case 'police servies':
//         return 'indianred';
//       case 'medical emergency':
//         return 'rosybrown';
//       case 'fire brigade':
//         return 'royalblue';
//       case 'disaster helpline':
//         return 'teal';
//       case 'animal control':
//         return 'orange'; // Example color
//       case 'domestic violence hotline':
//         return 'purple'; // Example color
//       case 'child abuse':
//         return 'green'; // Example color
//       case 'search and rescue':
//         return 'yellow'; // Example color
//       default:
//         return 'gray'; // Default color
//     }
//   };

//   const helplines = [
//     { title: 'Police Servies', number: '999' },
//     { title: 'Medical Emergency', number: '999' },
//     { title: 'Fire Brigade', number: '999' },
//     { title: 'Disaster Helpline', number: '999' },
//     { title: 'Animal Control', number: '999' },
//     { title: 'Domestic Violence Hotline', number: '999' },
//     { title: 'Child Abuse', number: '999' },
//     { title: 'Search and Rescue', number: '999' },
//   ];

//   return (
//     <ScrollView contentContainerStyle={styles.scrollView}>
//       <View style={styles.container}>
//         <View style={styles.greetingContainer}>
//           <Text style={styles.message}>One Click Emergency Assistance</Text>
//         </View>

//         {helplines.map((helpline, index) => (
//           <TouchableOpacity key={index} onPress={() => callHelpline(helpline.number)}>
//             <View style={[styles.cardContainerLarge, { backgroundColor: getColorByTitle(helpline.title) }]}>
//               <Text style={styles.cardTitle}>{helpline.title}</Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     paddingBottom: 50,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'mintcream',
//     paddingHorizontal: 20,
//     paddingTop: 25,
//     width: '100%',
//   },
//   greetingContainer: {
//     marginBottom: 20,
//   },
//   message: {
//     fontSize: 20,
//     fontFamily: 'Arial',
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   cardContainerLarge: {
//     backgroundColor: '#72A8BC',
//     borderRadius: 10,
//     padding: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     marginBottom: 20,
//     height: 90,
//     justifyContent: 'center',
//   },
//   cardTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#fff',
//     textAlign: 'center',
//   },
// });

// export default HelplineScreen;

import React from 'react';
import { View, Text, TouchableOpacity, Linking, Alert, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native';

const HelplineScreen = () => {
  const callHelpline = (number:any) => {
    Alert.alert(
      'Confirm Call',
      `Are you sure you want to call ${number}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Call',
          onPress: () => {
            Linking.openURL(`tel:${number}`);
          },
        },
      ]
    );
  };

  const getColorByTitle = (title:any) => {
    switch (title.toLowerCase()) {
      case 'police servies':
        return 'indianred';
      case 'medical emergency':
        return '#1c6cd4';
      case 'fire brigade':
        return '#FFA500';
      case 'disaster helpline':
        return 'teal';
      case 'animal rescue':
        return '#815e3f'; // Example color
      case 'domestic violence hotline':
        return 'purple'; // Example color
      case 'child abuse':
        return 'blue'; // Example color
      case 'search and rescue':
        return '#bd0f09'; // Example color
      default:
        return 'gray'; // Default color
    }
  };

  const helplines = [
    { title: 'Police Servies', number: '100', image: require('../assets/icons/helpline/police.png') },
    { title: 'Medical Emergency', number: '108', image: require('../assets/icons/helpline/med.png') },
    { title: 'Fire Brigade', number: '101', image: require('../assets/icons/helpline/fire.png') },
    { title: 'Disaster Helpline', number: '1902', image: require('../assets/icons/helpline/disaster.png') },
    { title: 'Animal Rescue', number: '+91 9962998886' , image: require('../assets/icons/helpline/animal.png')},
    { title: 'Domestic Violence Hotline', number: '+91 7827170170' , image: require('../assets/icons/helpline/dom.png')},
    { title: 'Child Abuse', number: '1098' , image: require('../assets/icons/helpline/child.png')},
    { title: 'Search and Rescue', number: ' 91 824 240 5262 ' , image: require('../assets/icons/helpline/rescue.png')},
    // Add more helplines with respective images
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.message}>One Click Emergency Assistance</Text>
        </View>

        {helplines.map((helpline, index) => (
          <TouchableOpacity key={index} onPress={() => callHelpline(helpline.number)}>
            <View style={[styles.cardContainerLarge, { backgroundColor: getColorByTitle(helpline.title) }]}>
              <Image source={helpline.image} style={styles.image} />
              <Text style={styles.cardTitle}>{helpline.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: 'mintcream',
    paddingHorizontal: 20,
    paddingTop: 25,
    width: '100%',
  },
  greetingContainer: {
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    fontFamily: 'Arial',
    color: '#333',
    fontWeight: 'bold',
  },
  cardContainerLarge: {
  
    backgroundColor: 'transparent',
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
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
    marginLeft: 15,
    marginTop: 9,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default HelplineScreen;
