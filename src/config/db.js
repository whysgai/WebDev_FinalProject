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

export let fireUID = ""

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        setCookie("test", user.uid, 1)
        console.log(getCookie("test"))
        fireUID = user.uid
    }else{
        console.log("user is null")
    }
});

export const fireUser = firebase.auth().currentUser
export default fire
