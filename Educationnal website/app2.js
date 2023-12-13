import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getDatabase,set,ref} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCZpPQcokscOjqnHKMl2wcs5WZJEYpK0sk",
    authDomain: "davathon-6ef6a.firebaseapp.com",
    databaseURL: "https://davathon-6ef6a-default-rtdb.firebaseio.com",
    projectId: "davathon-6ef6a",
    storageBucket: "davathon-6ef6a.appspot.com",
    messagingSenderId: "632485375956",
    appId: "1:632485375956:web:6724be89be1d1c4d0ff041"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signup.addEventListener("click", (e) => {
   
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    createUserWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
        // Signed in 

        const user = userCredential.user;
        const b = alert("Your account successfully SIGNUP" + user)
        alert(b)

        const sanitizedEmail = email.replace(/[\.\#$\[\]]/g, '_');
        
    set(ref(database, "The Users" + sanitizedEmail), {
        FistName: fname,
        LastName: lname,
        Email: email,
        password: password,
       
      })

        .then(() => {
            // Signed in 
            alert("datastored")
            window.location.href = "index3.html"
        })
        .catch((error) => {
          alert("data not stored")
        })
      
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           ;
            alert("ERROR:" + errorMessage)
            // ..
        });
})
})