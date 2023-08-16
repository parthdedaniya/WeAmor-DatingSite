import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBIIZsjcFaH1w1sl3EAHjJkgS0pVJj4HvQ",
	authDomain: "we-amor-b0ac8.firebaseapp.com",
	projectId: "we-amor-b0ac8",
	storageBucket: "we-amor-b0ac8.appspot.com",
	messagingSenderId: "864493911830",
	appId: "1:864493911830:web:3cd1efd35dd508b0375a37",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
