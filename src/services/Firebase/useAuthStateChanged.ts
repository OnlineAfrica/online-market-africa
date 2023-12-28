import {useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const useAuthStateChanged = (): {
  authSubscriber: () => void;
  user: FirebaseAuthTypes.User | null;
  initializing: boolean;
} => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (usr: FirebaseAuthTypes.User | null) => {
    setUser(usr);
    if (initializing) {
      setInitializing(false);
    }
  };

  const subscriber = auth().onAuthStateChanged(usr => onAuthStateChanged(usr));
  return {
    authSubscriber: subscriber,
    user: user,
    initializing: initializing,
  };
};
