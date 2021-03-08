import React, { useState, useEffect } from 'react';
import { FAB } from 'react-native-paper';
import {
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import firebase from 'src/config/firebase';
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

type movieItem = {
  key: number;
  component: any;
  ref: any;
};

const HomeScreen = ({ navigation, route }: Props) => {
  const [movies, setMovies] = useState<movieItem[]>([]);

  const setMovieList = async () => {
    const ref = firebase.storage().ref('movies/');
    const movieList = await ref.listAll();
    setMovies(
      movieList.items.map((ref, index) => {
        return {
          key: index,
          component: VideoCard,
          ref: ref,
        };
      })
    );
  };

  useEffect(() => {
    setMovieList();
  }, []);

  const handlePress = (item: movieItem) => async () => {
    // const firstPage = await ref.list({ maxResults: 10 });
    // const firstItemRef = firstPage.items[0];
    // const url = await firstItemRef.getDownloadURL();
    // setMovies();
    const url = await item.ref.getDownloadURL();
    navigation.navigate('VideoDetail', { vidieoUri: url });
  };

  const renderItem = ({ item }: any) => {
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
      <FlatList data={movies} renderItem={renderItem} numColumns={2} />
      <FAB style={styles.fab} icon='refresh' onPress={setMovieList} />
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
