importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

const firebaseConfig=({
    apiKey: "AIzaSyB26sJsqL-6IfAwR_nB2eKHX9C0hfxXFso",
    authDomain: "quizapppwa-3f8d4.firebaseapp.com",
    projectId: "quizapppwa-3f8d4",
    storageBucket: "quizapppwa-3f8d4.appspot.com",
    messagingSenderId: "854424978407",
    appId: "1:854424978407:web:dfe9dcd4c078cd7d06f342",
    measurementId: "G-VN57NERR0C"
})
firebase.initializeApp(firebaseConfig);
firebase.messaging();