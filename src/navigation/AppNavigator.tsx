import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from 'src/navigation/AuthNavigator';
import MainScreen from 'src/screens/MainScreen';
import { UserContext } from 'src/contexts/userContext';

const AppNavigator = () => {
  const { user } = useContext(UserContext);
  console.log('AppNavigator AppNavigator AppNavigator');
  console.log({ user });
  console.log('AppNavigator AppNavigator AppNavigator');

  return (
    <NavigationContainer>
      {!user ? <AuthNavigator /> : <MainScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
