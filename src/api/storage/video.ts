import { storage } from 'src/api/storage';

export const getVideoStorageRef = (fileName: string) => {
  return storage.ref('videos/' + fileName);
};

export const getThumbsStorageRef = (fileName: string) => {
  return storage.ref('thumbs/' + fileName);
};
