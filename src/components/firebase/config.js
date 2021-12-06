// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore, collection } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBf03BumBayeVxJSl3dVugeJcmAtXUaa9s',
	authDomain: 'web-app-project-8109f.firebaseapp.com',
	projectId: 'web-app-project-8109f',
	storageBucket: 'web-app-project-8109f.appspot.com',
	messagingSenderId: '820827707343',
	appId: '1:820827707343:web:4479db9ed2e5670db224ba',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db, collection };
