import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDIqIh0MrhaLq-PDn6z-Bp50z_dMeLJsu8",
    authDomain: "ytclone-arnavsharma2711.firebaseapp.com",
    projectId: "ytclone-arnavsharma2711",
    storageBucket: "ytclone-arnavsharma2711.appspot.com",
    messagingSenderId: "555763795085",
    appId: "1:555763795085:web:aeb6266fcc37c8f6934ec4"
  };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()