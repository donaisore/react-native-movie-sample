/* library */
import React, { useState } from 'react';
import { FAB } from 'react-native-paper';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
/* api */
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
  thumbUrl: string;
};

const HomeScreen = ({ navigation, route }: Props) => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const setVideoList = async () => {
    const videoSnapShot = await getVideoSnapShot();
    const videoList = videoSnapShot.docs.map((doc, index) => {
      const videoItem = doc.data() as VideoItem;
      return {
        key: index,
        videoUrl: videoItem.videoUrl,
        thumbUrl: videoItem.thumbUrl,
      };
    });
    setVideos(videoList);
    setRefreshing(false);
  };

  // useEffect(() => {
  //   setVideoList();
  // }, []);

  const handlePress = (item: VideoItem) => async () => {
    navigation.navigate('VideoDetail', { vidieoUri: item.videoUrl });
  };

  const renderItem = ({ item }: ListRenderItemInfo<VideoItem>) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={handlePress(item)}
      >
        <VideoCard thumbUrl={item.thumbUrl} style={styles.card} />
      </TouchableOpacity>
    );
  };

  if (refreshing)
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
