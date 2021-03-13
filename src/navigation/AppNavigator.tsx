import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from 'src/navigation/AuthNavigator';
import { UserContext } from 'src/contexts/userContext';
import HomeStackNavigator from 'src/navigation/HomeStackNavigator';

const AppNavigator = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      <HomeStackNavigator />
      {/* {!user ? <AuthNavigator /> : <HomeStackNavigator />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
