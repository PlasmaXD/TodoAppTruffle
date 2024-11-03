import firebase from 'firebase';
import { firebaseConfig } from './firebase/config.js';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
/*{
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",*/
   //   "**/.*",
     // "**/node_modules/**"
 /*   ]
  }
}
*/