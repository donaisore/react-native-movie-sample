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
/* constants */
import { mainColor } from 'src/constants/color';

const MainBottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color?: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const MainBottomTabNavigator = () => {
  return (
    <MainBottomTab.Navigator
      tabBarOptions={{
        activeTintColor: mainColor,
      }}
    >
      <MainBottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='home-outline' color={color} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name='Favorite'
        component={Favorite}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='heart-outline' color={color} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name='MyPage'
        component={MyPageScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='person-outline' color={color} />
          ),
        }}
      />
    </MainBottomTab.Navigator>
  );
};

export default MainBottomTabNavigator;
