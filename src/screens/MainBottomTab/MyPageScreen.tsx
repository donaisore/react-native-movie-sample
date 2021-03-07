import React from 'react';
import { FAB } from 'react-native-paper';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const MyPageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MyPageScreen</Text>
      <FAB style={styles.fab} icon='plus' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default MyPageScreen;
