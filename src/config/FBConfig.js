import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBDcHCj6Ts8AwlWPhvQZLAL4Y7BPU8E3l8",
    authDomain: "super-sami-aea3c.firebaseapp.com",
    databaseURL: "https://super-sami-aea3c.firebaseio.com",
    projectId: "super-sami-aea3c",
    storageBucket: "super-sami-aea3c.appspot.com",
    messagingSenderId: "348237669449",
    appId: "1:348237669449:web:00d945b6a6524068c5cb98",
    measurementId: "G-HJSF331Z99"
  };
  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;       