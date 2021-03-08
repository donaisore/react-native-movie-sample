import React, { useState, useEffect } from 'react';
import { FAB } from 'react-native-paper';
import {
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  ListRenderItemInfo,
} from 'react-native';
import { getVideoSnapShot } from 'src/api/firestore/video';
/* components */
import VideoCard from 'src/components/VideoCard';

/* types */
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from 'src/types/navigation';

type Props = {
  navigation: StackNavigationProp<HomeStackParamList, 'Main'>;
  route: RouteProp<HomeStackParamList, 'Main'>;
};

type VideoItem = {
  key: number;
  component: any;
  videoUrl: string;
};

const HomeScreen = ({ navigation, route }: Props) => {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  const setVideoList = async () => {
    const videoSnapShot = await getVideoSnapShot();
    const videoList = videoSnapShot.docs.map((doc, index) => {
      return {
        key: index,
        component: VideoCard,
        videoUrl: doc.data().videoUrl,
      };
    });
    setVideos(videoList);
  };

  useEffect(() => {
    setVideoList();
  }, []);

  const handlePress = (item: VideoItem) => async () => {
    navigation.navigate('VideoDetail', { vidieoUri: item.videoUrl });
  };

  const renderItem = ({ item }: ListRenderItemInfo<VideoItem>) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={handlePress(item)}
      >
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
    <SafeAreaView style={styles.container}>
      <FlatList data={videos} renderItem={renderItem} numColumns={2} />
      <FAB style={styles.fab} icon='refresh' onPress={setVideoList} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: '50%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '98%',
    height: '98%',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
