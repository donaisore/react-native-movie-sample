import { storage } from 'src/api/storage/firebase';

export const getVideoStorageRef = (fileName: string) => {
  return storage.ref('videos/' + fileName);
};
