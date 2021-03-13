/* library */
import React, { useState } from 'react';
import { FAB } from 'react-native-paper';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { ActivityIndicator, Colors, Snackbar } from 'react-native-paper';
/* api */
import { addVideo } from 'src/api/firestore/video';
import { getVideoStorageRef } from 'src/api/storage/video';
/* utils */
import { openVideoImagePickerAsync } from 'src/utils/imagePicker';
import { RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED } from 'expo-av/build/Audio';

const MyPageScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);

  const openImagePickerAsync = async () => {
    setIsLoading(true);
    try {
      const videoUri = await openVideoImagePickerAsync();
      if (!videoUri) return;

      const fileName = videoUri.split('/').slice(-1)[0];
      const response = await fetch(videoUri);
      const blob = await response.blob();
      const videoStorageRef = getVideoStorageRef(fileName);
      await videoStorageRef.put(blob);

      const videoUrl = await videoStorageRef.getDownloadURL();
      await addVideo({ videoUrl: videoUrl });
      setSnackBarVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
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
      <Text>MyPageScreen</Text>
      <FAB style={styles.fab} icon='plus' onPress={openImagePickerAsync} />
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
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default MyPageScreen;
