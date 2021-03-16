import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

type Props = {
  thumbUrl: string;
  style: StyleProp<ImageStyle>;
};

const VideoCard = ({ thumbUrl, style }: Props) => {
  return <Image source={{ uri: thumbUrl }} style={style} />;
};

export default VideoCard;
