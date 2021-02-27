import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const VideoCard = () => {
  return (
    <View>
      <Image
        source={{
          uri:
            'https://frigater.com/wp-content/uploads/2019/09/190924_b_%E3%82%B5%E3%83%A0%E3%83%8D%E3%82%A4%E3%83%AB.png',
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});

export default VideoCard;
