

const firebaseConfig01 = {
  apiKey: "AIzaSyA0pTU8hk-5Qg6Nd-WN3BSUOVpRvuMcAYo",
  authDomain: "aisha-gold.firebaseapp.com",
  projectId: "aisha-gold",
  storageBucket: "aisha-gold.appspot.com",
  messagingSenderId: "989166821736",
  appId: "1:989166821736:web:d000380e21d53b2bdaf6dd",
  measurementId: "G-CSR72TSW3C",
	databaseURL: 'https://aisha-gold-default-rtdb.asia-southeast1.firebasedatabase.app'
};

firebase.initializeApp(firebaseConfig01);

let enquiryRef = firebase.database().ref('enquiry-database');

document.getElementById('enquiry_form').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  var name = getInput('enquiry_name');
  var mobile = getInput('enquiry_phone');
	var subject = getInput('enquiry_subject');

  saveEnquiry(name, mobile, subject);
}

function getInput(id) {

  return document.getElementById(id).value;
}

function saveEnquiry(name, mobile, subject){

  var newEnquiry = enquiryRef.push();
  newEnquiry.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    name: name,
    mobile: mobile,
    subject: subject,
  })
  .then(function() {

    console.log('Synchronization succeeded');
    $('#enquiry_form')[0].reset();
    $("#enquiry-message").css("display", "block");
    $("#enquiry-message").text("Successfully Submitted. Aisha gold will contact you.");
    // setTimeout($("#enquiry-message").css("display", "none"), 6000);
  })
  .catch(function(error) {

    console.log('Synchronization failed');
    $("#enquiry-message").css("display", "block");
    $("#enquiry-message").text("Failed Submission. Try again after reloading.");
    // setTimeout($("#enquiry-message").css("display", "none"), 6000);
  });
}
