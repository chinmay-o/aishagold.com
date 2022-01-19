// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig01 = {
  apiKey: "AIzaSyA0pTU8hk-5Qg6Nd-WN3BSUOVpRvuMcAYo",
  authDomain: "aisha-gold.firebaseapp.com",
  projectId: "aisha-gold",
  storageBucket: "aisha-gold.appspot.com",
  messagingSenderId: "989166821736",
  appId: "1:989166821736:web:d000380e21d53b2bdaf6dd",
  measurementId: "G-CSR72TSW3C",
  databaseURL: "https://aisha-gold-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const firebaseConfig02 = {
  apiKey: "AIzaSyCxb02rVE9J-LePL-VJtxxG4dP5CycEhvQ",
  authDomain: "aisha-gold02.firebaseapp.com",
  projectId: "aisha-gold02",
  storageBucket: "aisha-gold02.appspot.com",
  messagingSenderId: "121517323464",
  appId: "1:121517323464:web:f0ccd064318a2e235c61fd",
  measurementId: "G-SYBJGFYM0F"
};

const firebaseConfig03 = {
  apiKey: "AIzaSyCl_z0QXSfYyP5Ym9oRPqHehiXcfgl7Yrk",
  authDomain: "aisha-gold03.firebaseapp.com",
  projectId: "aisha-gold03",
  storageBucket: "aisha-gold03.appspot.com",
  messagingSenderId: "654078073371",
  appId: "1:654078073371:web:869d0217286dc2779576be",
  measurementId: "G-6504D2PXXV"
};

var uploadFinishSwitch = 0;

firebase.initializeApp(firebaseConfig01);

firebase.initializeApp(firebaseConfig02, "storageApp02");
firebase.initializeApp(firebaseConfig03, "storageApp03");

let credentialRef = firebase.database().ref('credential-database/-MtcGjRLmNcsaC7M_bx0');
let productsRef = firebase.database().ref('product-database');

var credentialDB = [];

setTimeout(function() {

  credentialFetch();
}, 2000);

setInterval(function() {

  if(firebase.auth().currentUser == null) {

    firebase.app("storageApp02").auth().signOut();
    firebase.app("storageApp03").auth().signOut();
    window.location.href = "/admin-signin.html";
  }
}, 2600);

function chooseUpload() {

  var uploadProgress = setInterval(function() {

    if (document.querySelector('#product-img').files[0] != null) {

      $('.loading').css("display", "block");
      imageURL01();
      imageURL("storageApp02", "#previewImageTagID02", String(credentialDB[0]), String(credentialDB[1]));
      imageURL("storageApp03", "#previewImageTagID03", String(credentialDB[0]), String(credentialDB[1]));
      clearInterval(uploadProgress);
    }
  }, 200)
}

function credentialFetch() {

  credentialRef.on("value", function(snapshot) {

    credentialDB.push(snapshot.val().username);
    credentialDB.push(snapshot.val().credential);
  }, function(error) {

    console.log("Error: " + error.code);
  });
}

function signOut() {

  firebase.app("storageApp02").auth().signOut();
  firebase.app("storageApp03").auth().signOut();
  firebase.auth().signOut().then(() => {

    window.location.href = "/admin-signin.html";
  }).catch((error) => {

    console.log('Signing Out Failed')
  });
}

document.getElementById('product_form').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  var title = getInput('product-title');
  var category = getInput('product-category');
  var karat = getInput('product-karat');
  var gram = getInput('product-gram');

  saveProduct(title, category, karat, gram);
}

function saveProduct(title, category, karat, gram) {

  var productData = productsRef.push();
  productData.set({

      timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
      title: title,
      category: category,
      karat: karat,
      gram: gram,
      productURL01: document.querySelector('#previewImageTagID01').src,
      productURL02: document.querySelector('#previewImageTagID02').src,
      productURL03: document.querySelector('#previewImageTagID03').src,
    })
    .then(function() {

      console.log('Synchronization succeeded');
      $('#product_form')[0].reset();
      $('#product_form h4').css("display", "block");
      $('.done').css("display", "none");
      uploadFinishSwitch = 0;

      document.querySelector('#previewImageTagID01').src = '';
      document.querySelector('#previewImageTagID02').src = '';
      document.querySelector('#previewImageTagID03').src = '';
    })
    .catch(function(error) {

      console.log('Synchronization failed');
    });
}

function imageUploadFirebase(firebaseApp, documentSrc) {

  const ref = firebase.app(firebaseApp).storage().ref();
  const file = document.querySelector('#product-img').files[0];
  const name = (+new Date()) + '-' + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);

  task.then(snapshot => snapshot.ref.getDownloadURL()).then((url) => {
      uploadFinishSwitch += 1;
      document.querySelector(documentSrc).src = url;
    })
    .catch(console.error);
}

function imageURL01() {

  const ref = firebase.storage().ref();
  const file = document.querySelector('#product-img').files[0];
  const name = (+new Date()) + '-' + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);

  task.then(snapshot => snapshot.ref.getDownloadURL()).then((url) => {
      uploadFinishSwitch += 1;
      document.querySelector('#previewImageTagID01').src = url;
      checkUploadStatus();
    })
    .catch(console.error);
}

function imageURL(storageApp, documentSrc, email, credential) {

  firebase.app(storageApp).auth().onAuthStateChanged(function(user) {
    if (user) {

      imageUploadFirebase(storageApp, documentSrc);
    } else {

      firebase.app(storageApp).auth().signInWithEmailAndPassword(email, credential)
        .then((userCredential) => {

          imageUploadFirebase(storageApp, documentSrc);
        })
        .catch((error) => {

          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }
  });
}

function checkUploadStatus() {

  var uploadProgressFinish = setInterval(function() {

    if (uploadFinishSwitch == 3) {

      $('.loading').css("display", "none");
      $('.done').css("display", "block");
      $('#product_form h4').css("display", "none");
      clearInterval(uploadProgressFinish);
    }
  }, 200)
}

function getInput(id) {

  return document.getElementById(id).value;
}
