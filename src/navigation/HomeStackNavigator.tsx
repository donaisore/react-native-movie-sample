import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from 'src/types/navigation';
import HomeScreen from 'src/screens/MainBottomTab/HomeScreen';
import VideoDetail from 'src/screens/MainBottomTab/VideoDetail';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name='Main' component={HomeScreen} />
      <HomeStack.Screen name='VideoDetail' component={VideoDetail} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
