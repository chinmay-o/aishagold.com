

let goldRateDB = firebase.database().ref('goldRate-database').limitToLast(1);

let todaysGoldRate;
let goldRateArray = [];

goldRateDB.on("value", function(snapshot) {

   todaysGoldRate = snapshot.val();
   for (let key in todaysGoldRate) {

     goldRateArray.push(todaysGoldRate[key]);
   }
}, function (error) {

   console.log("Error: " + error.code);
});

function goldRateCardUpdate() {

  document.getElementById('goldRateDate').innerHTML = goldRateArray[0].date;
  document.getElementById('goldRate22K').innerHTML = goldRateArray[0].rate22K;
  document.getElementById('goldRate22K8').innerHTML = (goldRateArray[0].rate22K)*8;
  document.getElementById('goldRate18K').innerHTML = goldRateArray[0].rate18K;
  document.getElementById('goldRateSilver').innerHTML = goldRateArray[0].rateSilver;
}

function goldRateHomeDisplay() {

  document.getElementById('homeGoldDate').innerHTML = goldRateArray[0].date;
  document.getElementById('homeGold22K').innerHTML = goldRateArray[0].rate22K;
  document.getElementById('homeGold22K8').innerHTML = (goldRateArray[0].rate22K)*8;
  document.getElementById('homeGold18K').innerHTML = goldRateArray[0].rate18K;
  document.getElementById('homeSilver1G').innerHTML = goldRateArray[0].rateSilver;
}

var loadAPI = setInterval(checkAPILoader, 100);

function checkAPILoader() {

  if (goldRateArray != 0) {

    goldRateCardUpdate();
    if (window.location.pathname == '/aishagold.com/' || window.location.pathname == '/aishagold.com/index.html') {

      goldRateHomeDisplay();
    }
    clearInterval(loadAPI);
  }
}
