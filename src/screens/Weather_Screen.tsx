import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Up-To-Date Weather only for youuuu :)</Text>
      {/* Add your content for the Live Location screen here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WeatherScreen;
