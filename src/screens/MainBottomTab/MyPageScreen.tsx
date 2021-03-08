import React, { useState } from 'react';
import { FAB } from 'react-native-paper';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import { addVideo } from 'src/api/firestore/video';
import { getVideoStorageRef } from 'src/api/storage/video';
import * as ImagePicker from 'expo-image-picker';

const MyPageScreen = () => {
  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('カメラロールへのアクセス権限が必要です。');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });
    if (!pickerResult.cancelled) {
      const { uri } = pickerResult;
      const fileName = uri.split('/').slice(-1)[0];
      const response = await fetch(uri);
      const blob = await response.blob();
      const videoStorageRef = getVideoStorageRef(fileName);
      await videoStorageRef.put(blob);
      const videoUrl = await videoStorageRef.getDownloadURL();
      try {
        await addVideo({ videoUrl: videoUrl });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>MyPageScreen</Text>
      <FAB style={styles.fab} icon='plus' onPress={openImagePickerAsync} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
