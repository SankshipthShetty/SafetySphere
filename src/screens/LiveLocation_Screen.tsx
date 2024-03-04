import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LiveLocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Live Location Screen</Text>
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

export default LiveLocationScreen;
