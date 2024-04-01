
import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    // signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    getDocs,
    query
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCg1HnS9qWX7U7RJYonjMq8bG5EneHZw3Y",
    authDomain: "crown-clothing-8fc35.firebaseapp.com",
    projectId: "crown-clothing-8fc35",
    storageBucket: "crown-clothing-8fc35.appspot.com",
    messagingSenderId: "271639720410",
    appId: "1:271639720410:web:deea0a59ffbfbda4b4d0e3",
    measurementId: "G-2YE6KNC98B"
};

/** 
Initialize Firebase appv
*/
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
    prompt: 'select_accunt',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


const db = getFirestore()

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    });
    await batch.commit();
    console.log('done')
}


export const getCategoriesAndDocument = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshort = await getDocs(q)
    const categoryMap = querySnapshort.docs.reduce((acc, docSnapshort) => {
        const { title, items } = docSnapshort.data();
        acc[title.toLowerCase()] = items;
        return acc
    }, {})
    return categoryMap
}


export const createUserDocumentFromAuth = async (userAuth, additionalSetting) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const snapshort = await getDoc(userDocRef);

    if (!snapshort.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalSetting
            })
        } catch (err) {
            console.log('createUserDocumentFromAuth', err);
        }
    }
    return userDocRef;
}


export const createUserAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)