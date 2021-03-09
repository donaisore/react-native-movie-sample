import { storage } from 'src/api/storage';

export const getVideoStorageRef = (fileName: string) => {
  return storage.ref('videos/' + fileName);
};
