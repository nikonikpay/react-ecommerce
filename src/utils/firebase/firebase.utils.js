import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCFuNt2PjqxYiV7XrdFtZbXYrhB7tz1irc",
    authDomain: "clothing-c06fa.firebaseapp.com",
    projectId: "clothing-c06fa",
    storageBucket: "clothing-c06fa.appspot.com",
    messagingSenderId: "972391963540",
    appId: "1:972391963540:web:e8d09ed611961eb3290d81"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

//creating user in database
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef)
    console.log(userSnapShot)
    if (!userSnapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAd = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAd
            })
        } catch (e) {
            console.log('error creating the user', e.message);
        }
    }

return userDocRef;

}
