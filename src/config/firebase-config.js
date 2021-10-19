import { getAuth } from '@firebase/auth';
import firebase from 'firebase/compat/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPqmQRZZGEN4awS_AWPw_kRB1VTUV2kOc",
  authDomain: "mit-meerut.firebaseapp.com",
  projectId: "mit-meerut",
  storageBucket: "mit-meerut.appspot.com",
  messagingSenderId: "260700056096",
  appId: "1:260700056096:web:1a0394321e9897b257aa45",
  measurementId: "G-REFS6PMDX6"
};

firebase.initializeApp(firebaseConfig);
const auth=getAuth();

export {auth};
export default firebase;