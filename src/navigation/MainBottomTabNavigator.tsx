import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from 'src/types/navigation';
import HomeStackNavigator from 'src/navigation/HomeStackNavigator';
import Favorite from 'src/screens/MainBottomTab/Favorite';
import MyPageScreen from 'src/screens/MainBottomTab/MyPageScreen';

const MainBottomTab = createBottomTabNavigator<MainBottomTabParamList>();

// const TabBarIcon = (name: React.ComponentProps<typeof Ionicons>['name']) => {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// };

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color?: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const MainBottomTabNavigator = () => {
  return (
    <MainBottomTab.Navigator>
      <MainBottomTab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name='home-outline' />,
        }}
      />
      <MainBottomTab.Screen
        name='Favorite'
        component={Favorite}
        options={{
          tabBarIcon: () => <TabBarIcon name='heart-outline' />,
        }}
      />
      <MainBottomTab.Screen
        name='MyPage'
        component={MyPageScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name='person-outline' />,
        }}
      />
    </MainBottomTab.Navigator>
  );
};

export default MainBottomTabNavigator;
