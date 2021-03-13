/* library */
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* types */
import { MainBottomTabParamList } from 'src/types/navigation';
/* screens */
import HomeScreen from 'src/screens/MainBottomTab/HomeScreen';
/* navigations */
import Favorite from 'src/screens/MainBottomTab/Favorite';
import MyPageScreen from 'src/screens/MainBottomTab/MyPageScreen';

const MainBottomTab = createBottomTabNavigator<MainBottomTabParamList>();

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
        component={HomeScreen}
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
