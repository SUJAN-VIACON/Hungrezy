import { authentication } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

class AuthenticationService {
  user = null;
  error = null;

  register = async ({ name, email, password }) => {
    await createUserWithEmailAndPassword(authentication, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name,
        });
        this.user = user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.error = errorMessage;
      });

    const user = this.user;
    const error = this.error;
    return { user, error };
  };

  login = async ({ email, password }) => {
    await signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.user = user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.error = errorMessage;
      });

    const user = this.user;
    const error = this.error;
    return { user, error };
  };
}

export { AuthenticationService };
