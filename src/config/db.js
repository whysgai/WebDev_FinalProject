
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database"

let config = {
    apiKey: "AIzaSyCxca_YXuGnWgCDtfjCftOmwVLdaDv8iRo",
    authDomain: "codesnippetsaver.firebaseapp.com",
    databaseURL: "https://codesnippetsaver.firebaseio.com",
    projectId: "codesnippetsaver",
    storageBucket: "codesnippetsaver.appspot.com",
    messagingSenderId: "496491430565",
    appId: "1:496491430565:web:64a31d0d34b85203ef434c"
};

const fire = firebase.initializeApp(config);
fire.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

export let fireUID

firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        fireUID = user.uid
        console.log(fireUID)
    }else{
        console.log("user is null")
    }
});


export const fireUser = firebase.auth().currentUser

export default fire
