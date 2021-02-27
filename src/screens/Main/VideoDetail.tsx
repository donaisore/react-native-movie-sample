import React, { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
/* types */
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { MainStackParamList } from 'src/types/navigation';

type Props = {
  navigation: StackNavigationProp<MainStackParamList, 'VideoDetail'>;
  route: RouteProp<MainStackParamList, 'VideoDetail'>;
};

const VideoDetail = ({ navigation, route }: Props) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode='contain'
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: '100%',
    height: 300,
    // flex: 1,
  },
});

export default VideoDetail;
