import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
     <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background color
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
