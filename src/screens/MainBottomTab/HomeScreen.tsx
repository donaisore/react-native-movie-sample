import React, { useState, useEffect } from 'react';
import { FAB } from 'react-native-paper';
import {
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
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
  videoUrl: string;
};

const HomeScreen = ({ navigation, route }: Props) => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const setVideoList = async () => {
    const videoSnapShot = await getVideoSnapShot();
    const videoList = videoSnapShot.docs.map((doc, index) => {
      return {
        key: index,
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
        <VideoCard videoUrl={item.videoUrl} style={styles.card} />
      </TouchableOpacity>
    );
  };

  if (videos.length === 0)
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator
          size='large'
          animating={true}
          color={Colors.blue800}
        />
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        numColumns={2}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await setVideoList();
          setRefreshing(false);
        }}
      />
      <FAB style={styles.fab} icon='refresh' onPress={setVideoList} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
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
