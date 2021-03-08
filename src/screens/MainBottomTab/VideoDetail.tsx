import React, { useRef, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
/* types */
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from 'src/types/navigation';

type Props = {
  navigation: StackNavigationProp<HomeStackParamList, 'VideoDetail'>;
  route: RouteProp<HomeStackParamList, 'VideoDetail'>;
};

const VideoDetail = ({ navigation, route }: Props) => {
  const vidieoUri = route.params.vidieoUri;
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const handlePlay = () => {
    video.current.playAsync();
    setIsPlaying(true);
  };
  const handlePause = () => {
    video.current.pauseAsync();
    setIsPlaying(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.pressable}
        onPress={isPlaying ? handlePause : handlePlay}
      >
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: vidieoUri,
          }}
          resizeMode='contain'
          shouldPlay
          isLooping
        />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  pressable: {
    flex: 1,
    opacity: 1.0,
  },
  video: {
    flex: 1,
  },
});

export default VideoDetail;
