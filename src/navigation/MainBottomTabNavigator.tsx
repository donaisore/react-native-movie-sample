import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from 'src/types/navigation';
import HomeStackNavigator from 'src/navigation/HomeStackNavigator';
import Favorite from 'src/screens/MainBottomTab/Favorite';
import MyPage from 'src/screens/MainBottomTab/MyPage';

const MainBottomTab = createBottomTabNavigator<MainBottomTabParamList>();

const MainBottomTabNavigator = () => {
  return (
    <MainBottomTab.Navigator>
      <MainBottomTab.Screen name='Home' component={HomeStackNavigator} />
      <MainBottomTab.Screen name='Favorite' component={Favorite} />
      <MainBottomTab.Screen name='MyPage' component={MyPage} />
    </MainBottomTab.Navigator>
  );
};

export default MainBottomTabNavigator;
