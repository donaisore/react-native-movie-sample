import React, { useContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthNavigator from 'src/navigations/AuthNavigator';
import { UserContext } from 'src/contexts/userContext';
import HomeStackNavigator from 'src/navigations/HomeStackNavigator';

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
