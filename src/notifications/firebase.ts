// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAkVay01I-Rr_N6ECFsoTjaWcZ3SuWs54Y",
    authDomain: "logins-a004a.firebaseapp.com",
    projectId: "logins-a004a",
    storageBucket: "logins-a004a.firebasestorage.app",
    messagingSenderId: "280471905242",
    appId: "1:280471905242:web:8a2f12e3190a2f7e6ed6e3",
    measurementId: "G-1HBS04S1ZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const generateToken = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
        const token = await getToken(messaging, {
            vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
        });
        console.log(token)
        return token;
    }
}

export { messaging, generateToken };