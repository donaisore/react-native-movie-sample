import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from 'src/navigation/AuthNavigator';
import { UserContext } from 'src/contexts/userContext';
import MainBottomTabNavigator from 'src/navigation/MainBottomTabNavigator';
// import MainStackNavigator from './MainStackNavigator';

const AppNavigator = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {!user ? <AuthNavigator /> : <MainBottomTabNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
