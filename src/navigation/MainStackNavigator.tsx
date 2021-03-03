import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from 'src/types/navigation';
import MainScreen from 'src/screens/Main/MainScreen';
import VideoDetail from 'src/screens/Main/VideoDetail';
// import BottomTabNavigator from 'src/navigation/BottomTabNavigator';
import MainBottomTabNavigator from 'src/navigation/MainBottomTabNavigator';

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name='Main' component={MainBottomTabNavigator} />
      {/* <MainStack.Screen name='Main' component={MainScreen} />
      <MainStack.Screen name='VideoDetail' component={VideoDetail} /> */}
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
