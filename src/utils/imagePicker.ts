import * as ImagePicker from 'expo-image-picker';

export const openVideoImagePickerAsync = async (): Promise<string | null> => {
  let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (permissionResult.granted === false) {
    alert('カメラロールへのアクセス権限が必要です。');
    return null;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Videos,
  });

  if (!pickerResult.cancelled) {
    const { uri } = pickerResult;
    return uri;
  } else {
    return null;
  }
};
