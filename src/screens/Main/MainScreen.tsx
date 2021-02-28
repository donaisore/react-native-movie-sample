import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
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
    { key: 'foo', component: VideoCard },
    { key: 'foofoo1', component: VideoCard },
    { key: 'foofoo2', component: VideoCard },
    { key: 'foofoo3', component: VideoCard },
    { key: 'foofoo4', component: VideoCard },
    { key: 'foofoo5', component: VideoCard },
    { key: 'foofoo', component: VideoCard },
    { key: 'foofoofoo1', component: VideoCard },
    { key: 'foofoofoo2', component: VideoCard },
    { key: 'foofoofoo3', component: VideoCard },
    { key: 'foofoofoo4', component: VideoCard },
    { key: 'ffoooo5', component: VideoCard },
    { key: 'foofoofoofoo', component: VideoCard },
    { key: 'foofoofoofoo1', component: VideoCard },
    { key: 'foofoofoofoo2', component: VideoCard },
    { key: 'fofoofooo3', component: VideoCard },
    { key: 'foofoofoofoo4', component: VideoCard },
    { key: 'ffoofoooo5', component: VideoCard },
  ];

  const handlePress = () => {
    navigation.navigate('VideoDetail');
  };

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
        <Image
          source={{
            uri:
              'https://frigater.com/wp-content/uploads/2019/09/190924_b_%E3%82%B5%E3%83%A0%E3%83%8D%E3%82%A4%E3%83%AB.png',
          }}
          style={styles.card}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList data={movies} renderItem={renderItem} numColumns={2} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '50%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '98%',
    height: '98%',
    backgroundColor: 'red',
  },
});

export default MainScreen;
