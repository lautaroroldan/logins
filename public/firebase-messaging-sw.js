importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAkVay01I-Rr_N6ECFsoTjaWcZ3SuWs54Y",
    authDomain: "logins-a004a.firebaseapp.com",
    projectId: "logins-a004a",
    storageBucket: "logins-a004a.firebasestorage.app",
    messagingSenderId: "280471905242",
    appId: "1:280471905242:web:8a2f12e3190a2f7e6ed6e3",
    measurementId: "G-1HBS04S1ZG"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});