import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from 'src/types/navigation';
import VideoDetail from 'src/screens/MainBottomTab/VideoDetail';
import MainBottomTabNavigator from 'src/navigations/MainBottomTabNavigator';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name='Main' component={MainBottomTabNavigator} />
      <HomeStack.Screen name='VideoDetail' component={VideoDetail} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
