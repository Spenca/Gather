import * as firebase from 'firebase';

class Firebase {
    
    //initializes Firebase
    static initialize() {
        firebase.initializeApp({
            apiKey: "AIzaSyAY-D_-soA5vffZRv_-DXG4_D7wo16AKTI",
            authDomain: "gather-98218.firebaseapp.com",
            databaseURL: "https://gather-98218.firebaseio.com",
            storageBucket: "gather-98218.appspot.com",
        });
    }
}

module.exports = Firebase;