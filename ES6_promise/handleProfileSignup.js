import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((body) => {
      console.log(body);
    })
    .catch((error) => {
      Error(error.message);
    });
}
