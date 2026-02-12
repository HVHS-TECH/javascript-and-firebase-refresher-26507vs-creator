import { initializeApp }
  from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { getDatabase }
  from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"; 
 
import { getAuth, GoogleAuthProvider, signInWithPopup } 
  from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

  
  var fb_gamedb

  function fb_initialise() {
    const FB_GAMECONFIG = {
      apiKey: "AIzaSyBPL24VWJhZmddNslgw2XRv7NIVu4tkfsk",
      authDomain: "vanessa-sturman-13comp-8f6f4.firebaseapp.com",
      databaseURL: "https://vanessa-sturman-13comp-8f6f4-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "vanessa-sturman-13comp-8f6f4",
      storageBucket: "vanessa-sturman-13comp-8f6f4.firebasestorage.app",
      messagingSenderId: "294457924144",
      appId: "1:294457924144:web:4d51a9d46ea5415b572bf5"
    };

    const FB_GAMEAPP = firebase.initializeApp(FB_GAMECONFIG);
      fb_gamedb= getDatabase(FB_GAMEAPP);
      console.info(fb_gamedb);
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function swapText() {

    var x = document.getElementById("swapText");
    if (x.innerHTML === "Welcome") {
        x.innerHTML = "You pressed the button :p";
  } else {
        x.innerHTML = "Welcome";
  }
}

function changeHeading(){
    var heading = document.getElementById("changeHeading");
    heading.innerHTML = "You shouldn't have done that...";
}


const input = document.getElementById('name');
const output = document.getElementById('output');

function printInput(){
  output.innerHTML = input.value;
}

input.addEventListener("input", function () {
  if (input.value === "") {
    output.textContent = "Welcome";
  } else {
    output.textContent = `Welcome, ${input.value}!`;
  }
});