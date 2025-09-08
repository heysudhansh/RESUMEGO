import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, GoogleAuthProvider , signInWithPopup , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXBZk5KmlMVdaB9kCtjarMb5SYyGQ_pi4",
  authDomain: "resumego-4092a.firebaseapp.com",
  projectId: "resumego-4092a",
  storageBucket: "resumego-4092a.firebasestorage.app",
  messagingSenderId: "655822250127",
  appId: "1:655822250127:web:a2c824301bbaab596dd0fa",
  measurementId: "G-4BX9N2T8HG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode = 'en';



const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
    event.preventDefault();

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; 
    
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;
    alert('Registration Successfull!');
    window.location.href= "login.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(`Error [${errorCode}]: ${errorMessage}`);
    alert(`Error: ${errorMessage}`);
  });
})





const provider = new GoogleAuthProvider(); 
const googleRegister = document.getElementById("googleReg");
googleRegister.addEventListener("click", function(event) {

    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    alert("Registration Successful ! ");
    window.location.href = "home.html";
    
  }).catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;    
  });

});