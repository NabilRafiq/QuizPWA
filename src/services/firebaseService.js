import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB26sJsqL-6IfAwR_nB2eKHX9C0hfxXFso",
    authDomain: "quizapppwa-3f8d4.firebaseapp.com",
    projectId: "quizapppwa-3f8d4",
    storageBucket: "quizapppwa-3f8d4.appspot.com",
    messagingSenderId: "854424978407",
    appId: "1:854424978407:web:dfe9dcd4c078cd7d06f342",
    measurementId: "G-VN57NERR0C"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
export function initNotification() {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN=>", currentToken);
                } else {
                    // Show permission request.
                    console.log('No registration token available. Request permission to generate one.');

                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);

            });
        }
    })
}