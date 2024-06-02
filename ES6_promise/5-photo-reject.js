/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

export default function uploadPhoto(filename) {
  return new Promise((reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
