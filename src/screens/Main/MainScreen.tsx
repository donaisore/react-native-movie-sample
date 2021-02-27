import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
/* components */
import VideoCard from 'src/components/VideoCard';

/* types */
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { MainStackParamList } from 'src/types/navigation';

type Props = {
  navigation: StackNavigationProp<MainStackParamList, 'Main'>;
  route: RouteProp<MainStackParamList, 'Main'>;
};

const MainScreen = ({ navigation, route }: Props) => {
  const movies = [
    { key: 'foo', component: VideoCard },
    { key: 'foo1', component: VideoCard },
    { key: 'foo2', component: VideoCard },
    { key: 'foo3', component: VideoCard },
    { key: 'foo4', component: VideoCard },
    { key: 'foo5', component: VideoCard },
  ];

  const handlePress = () => {
    navigation.navigate('VideoDetail');
  };

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={handlePress}>
        <VideoCard />
        <Text>{item.key}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList data={movies} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
