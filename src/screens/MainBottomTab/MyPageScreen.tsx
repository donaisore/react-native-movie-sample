import React, { useState } from 'react';
import { FAB } from 'react-native-paper';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import firebase from 'src/config/firebase';
import * as ImagePicker from 'expo-image-picker';

const MyPageScreen = () => {
  // const [video, setVideo] = useState<ImagePicker.ImagePickerResult | null>(
  //   null
  // );

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
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
      const storageRef = firebase.storage().ref('movies/' + fileName);
      await storageRef.put(blob);
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
