import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from 'src/screens/Auth/SignInScreen';
import SignUpScreen from 'src/screens/Auth/SignUpScreen';
import { MainStackParamList } from 'src/types/navigation';
import MainScreen from 'src/screens/Main/MainScreen';
import VideoDetail from 'src/screens/Main/VideoDetail';

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name='Main' component={MainScreen} />
      <MainStack.Screen name='VideoDetail' component={VideoDetail} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
