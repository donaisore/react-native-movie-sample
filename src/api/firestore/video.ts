import { db } from 'src/api/firestore';
import { Video } from 'src/types/video';

const videoCollectionName = 'videos';

export const getVideoSnapShot = async () => {
  return await db.collection(videoCollectionName).get();
};

export const addVideo = async (movieObj: Video) => {
  return await db.collection(videoCollectionName).add(movieObj);
};
