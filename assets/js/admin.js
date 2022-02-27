
var load = false;

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

let enquiryDB = firebase.database().ref('enquiry-database');
let goldRateDB = firebase.database().ref('goldRate-database').limitToLast(1);

let enquiryList;
let todaysGoldRate;
let goldRateArray = [];

enquiryDB.on("value", function(snapshot) {

   enquiryList = snapshot.val();
   load = true;
}, function (error) {

   console.log("Error: " + error.code);
});

goldRateDB.on("value", function(snapshot) {

   todaysGoldRate = snapshot.val();
   for (let key in todaysGoldRate) {

     goldRateArray.push(todaysGoldRate[key]);
   }
}, function (error) {

   console.log("Error: " + error.code);
});

var arrayValue = [];

function enquiryTable() {

  arrayValue = [];

  for (let key in enquiryList) {

    arrayValue.push([enquiryList[key].timestamp, enquiryList[key].name, enquiryList[key].mobile, enquiryList[key].subject]);
  }
  arrayValue.reverse();
  enquiryHTML();
}

function enquiryHTML() {

  for(var i = 0; i < arrayValue.length; i++) {

    document.getElementById('enquiryLisiting').innerHTML += '<tr data-aos="fade-up" data-aos-delay="200">'+
      '<td><h4 class="item-title">'+ arrayValue[i][0] +'</h4></td>'+
      '<td><h4 class="item-title">'+ arrayValue[i][1] +'</h4></td>'+
      '<td><h4 class="item-title">'+ arrayValue[i][2] +'</h4></td>'+
      '<td><h4 class="item-title">'+ arrayValue[i][3] +'</h4></td>'+
      '<td><h4 class="item-title">'+ arrayValue[i][1] +'</h4></td>'+
      '</tr>';
  }
}

let goldRef = firebase.database().ref('goldRate-database');

function goldRateForm() {

  document.getElementById('date').value = moment().format('DD/MM/YYYY');
  document.getElementById('22K').value = goldRateArray[0].rate22K;
  document.getElementById('18K').value = goldRateArray[0].rate18K;
  document.getElementById('silver').value = goldRateArray[0].rateSilver;
}

var loadAPI = setInterval(checkAPILoader, 100);

function checkAPILoader() {

  if (goldRateArray != 0) {

    goldRateForm();
    clearInterval(loadAPI);
  }
}

setInterval(function() {

  if(firebase.auth().currentUser == null) {

    window.location.href = "/admin-signin.html";
  }
}, 2600);

document.getElementById('goldRate_form').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  var date = getInput('date');
  var rate22K = getInput('22K');
	var rate18K = getInput('18K');

  saveRates(date, rate22K, rate18K);
}

function saveRates(date, rate22K, rate18K){

  var todaysRate = goldRef.push();
  todaysRate.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    date: date,
    rate22K: rate22K,
    rate18K: rate18K,
  })
  .then(function() {

    console.log('Synchronization succeeded');
    $('#goldRate_form')[0].reset();
    setTimeout(function () {

      goldRateForm();
    }, 6000);
  })
  .catch(function(error) {

    console.log('Synchronization failed');
  });
}

function getInput(id) {

  return document.getElementById(id).value;
}

var interv = setInterval(checkLoader, 100);

function checkLoader() {

  if (load) {

    enquiryTable();
    clearInterval(interv);
  }
}

function signingOut() {

  firebase.auth().signOut().then(() => {

    window.location.href = "/admin-signin.html";
  }).catch((error) => {

    console.log('Signing Out Failed')
  });
}
