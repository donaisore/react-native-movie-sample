import React from 'react';
import { ActivityIndicator } from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size='large' />
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
