import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyD9tpnkvK_3Yp-lqa63dOmLBSJglWcDqak',
    databaseURL: 'https://leesiguk-feb0f.firebaseio.com',
};
const db = firebase.initializeApp(firebaseConfig).database();

export default db;
