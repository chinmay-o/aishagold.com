
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig01 = {
  apiKey: "AIzaSyA0pTU8hk-5Qg6Nd-WN3BSUOVpRvuMcAYo",
  authDomain: "aisha-gold.firebaseapp.com",
  projectId: "aisha-gold",
  storageBucket: "aisha-gold.appspot.com",
  messagingSenderId: "989166821736",
  appId: "1:989166821736:web:d000380e21d53b2bdaf6dd",
  measurementId: "G-CSR72TSW3C"
};

firebase.initializeApp(firebaseConfig01);

document.getElementById('contact_form').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  var username = getInput('username');
  var credential = getInput('password');

  firebase.auth().signInWithEmailAndPassword(username, credential)
    .then((userCredential) => {

      // Signed in
      var user = userCredential.user;
      console.log('Signed In');
      window.location.href = "/admin.html";
      // ...
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function getInput(id) {

  return document.getElementById(id).value;
}
