import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import * as VideoThumbnails from 'expo-video-thumbnails';

const VideoCard = ({ videoUrl, style }: any) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');

  const generateThumbnail = async () => {
    const { uri } = await VideoThumbnails.getThumbnailAsync(videoUrl);
    setThumbnailUrl(uri);
  };

  useEffect(() => {
    generateThumbnail();
  }, []);

  return <Image source={{ uri: thumbnailUrl }} style={style} />;
};

export default VideoCard;
