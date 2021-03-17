/* library */
import React, { useState } from 'react';
import { FAB } from 'react-native-paper';
import { Text, StyleSheet } from 'react-native';
import { ActivityIndicator, Colors, Snackbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
/* api */
import { addVideo } from 'src/api/firestore/video';
import { getVideoStorageRef, getThumbsStorageRef } from 'src/api/storage/video';
/* utils */
import { openVideoImagePickerAsync } from 'src/utils/imagePicker';
import * as VideoThumbnails from 'expo-video-thumbnails';
/* constants */
import { mainColor } from 'src/constants/color';

const MyPageScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);

  const openImagePickerAsync = async () => {
    setIsLoading(true);
    try {
      const localVideoUri = await openVideoImagePickerAsync();
      if (!localVideoUri) return;

      const videoFileName = localVideoUri.split('/').slice(-1)[0];
      const localVideoFile = await fetch(localVideoUri);
      const videoBlob = await localVideoFile.blob();
      const videoStorageRef = getVideoStorageRef(videoFileName);
      await videoStorageRef.put(videoBlob);
      const firebaseVideoUrl = await videoStorageRef.getDownloadURL();

      const { uri: localThumbUri } = await VideoThumbnails.getThumbnailAsync(
        firebaseVideoUrl
      );
      const localThumbFile = await fetch(localThumbUri);
      const thumbFileName = localThumbUri.split('/').slice(-1)[0];
      const thumbBlob = await localThumbFile.blob();
      const thumbStorageRef = getThumbsStorageRef(thumbFileName);
      await thumbStorageRef.put(thumbBlob);
      const firebaseThumbUrl = await thumbStorageRef.getDownloadURL();

      await addVideo({
        videoUrl: firebaseVideoUrl,
        thumbUrl: firebaseThumbUrl,
      });
      setSnackBarVisible(true);
    } catch (e) {
      alert(e);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size='large' animating={true} />
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.container}>
      <Text>MyPageScreen</Text>
      <FAB
        style={styles.fab}
        icon='plus'
        onPress={openImagePickerAsync}
        color='white'
      />
      <Snackbar
        onDismiss={() => {
          setSnackBarVisible(false);
        }}
        visible={snackBarVisible}
        duration={1000}
      >
        動画の投稿が完了しました！
      </Snackbar>
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
  fab: {
    backgroundColor: mainColor,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default MyPageScreen;
