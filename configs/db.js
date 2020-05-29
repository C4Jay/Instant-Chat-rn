import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAyGlQK51GXFz4kBRLj9BT-jIS55K70c0Q",
    authDomain: "wedding-planner-project.firebaseapp.com",
    databaseURL: "https://wedding-planner-project.firebaseio.com"
};

firebase.initializeApp(config);
export const db = firebase.database();