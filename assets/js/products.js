
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigProducts = {
  apiKey: "AIzaSyA0pTU8hk-5Qg6Nd-WN3BSUOVpRvuMcAYo",
  authDomain: "aisha-gold.firebaseapp.com",
  projectId: "aisha-gold",
  storageBucket: "aisha-gold.appspot.com",
  messagingSenderId: "989166821736",
  appId: "1:989166821736:web:d000380e21d53b2bdaf6dd",
  measurementId: "G-CSR72TSW3C",
  databaseURL: "https://aisha-gold-default-rtdb.asia-southeast1.firebasedatabase.app",
};

var arrayLoad = false;
const htmlPathArray = window.location.pathname.split("/");
var fileName = htmlPathArray[htmlPathArray.length-1];

firebase.initializeApp(firebaseConfigProducts, "products");

let productsListRef = firebase.app("products").database().ref('product-database');

var productArray = [];

productsListRef.on("value", function(snapshot) {

  productArray = [];
  for (let key in snapshot.val()) {

    productArray.push({
      key: key.substr(key.length - 6).toUpperCase(),
      title: snapshot.val()[key].title,
      karat: snapshot.val()[key].karat,
      type: snapshot.val()[key].type,
      gram: snapshot.val()[key].gram,
      category: snapshot.val()[key].category,
      productURL01: snapshot.val()[key].productURL01,
      productURL02: snapshot.val()[key].productURL02,
      productURL03: snapshot.val()[key].productURL03,
    });
  }
  arrayLoad = true;
  productArray.reverse();
}, function(error) {

  console.log("Error: " + error.code);
});

var productLoad = setInterval(productsShowcase, 100);

function productsShowcase() {

  if (arrayLoad) {

    productHTML();
    clearInterval(productLoad);
  }
}

function errorCode(productKey) {

  console.log(productKey);
}

// "'+ productArray[i].key +'"
function errorCode01(productKey) {

  document.getElementById(productkey).src = productArray.find(entry => entry.key == productkey).productURL02;
}

function errorCode02(productSet) {

  console.log('hello');
}

function shuffle(array) {

  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function filterNone() {

  $(".Antique").css("display", "block");
  $(".Semi-Antique").css("display", "block");
  $(".Kuwaiti").css("display", "block");
  $(".Kerala").css("display", "block");
  $(".Bombay").css("display", "block");
  $(".Kolkata").css("display", "block");
  $(".Rosegold").css("display", "block");
  $(".Cutting").css("display", "block");
}

function filterAntique() {

  $(".Antique").css("display", "block");
  $(".Semi-Antique").css("display", "block");
  $(".Kuwaiti").css("display", "none");
  $(".Kerala").css("display", "none");
  $(".Bombay").css("display", "none");
  $(".Kolkata").css("display", "none");
  $(".Rosegold").css("display", "none");
  $(".Cutting").css("display", "none");
}

function filterKuwaiti() {

  $(".Antique").css("display", "none");
  $(".Semi-Antique").css("display", "none");
  $(".Kuwaiti").css("display", "block");
  $(".Kerala").css("display", "none");
  $(".Bombay").css("display", "none");
  $(".Kolkata").css("display", "none");
  $(".Rosegold").css("display", "none");
  $(".Cutting").css("display", "none");
}


function filterKerala() {

  $(".Antique").css("display", "none");
  $(".Semi-Antique").css("display", "none");
  $(".Kuwaiti").css("display", "none");
  $(".Kerala").css("display", "block");
  $(".Bombay").css("display", "none");
  $(".Kolkata").css("display", "none");
  $(".Rosegold").css("display", "none");
  $(".Cutting").css("display", "none");
}


function filterBombay() {

  $(".Antique").css("display", "none");
  $(".Semi-Antique").css("display", "none");
  $(".Kuwaiti").css("display", "none");
  $(".Kerala").css("display", "none");
  $(".Bombay").css("display", "block");
  $(".Kolkata").css("display", "none");
  $(".Rosegold").css("display", "none");
  $(".Cutting").css("display", "none");
}


function filterKolkata() {

  $(".Antique").css("display", "none");
  $(".Semi-Antique").css("display", "none");
  $(".Kuwaiti").css("display", "none");
  $(".Kerala").css("display", "none");
  $(".Bombay").css("display", "none");
  $(".Kolkata").css("display", "block");
  $(".Rosegold").css("display", "none");
  $(".Cutting").css("display", "none");
}


function filterRosegold() {

  $(".Antique").css("display", "none");
  $(".Semi-Antique").css("display", "none");
  $(".Kuwaiti").css("display", "none");
  $(".Kerala").css("display", "none");
  $(".Bombay").css("display", "none");
  $(".Kolkata").css("display", "none");
  $(".Rosegold").css("display", "block");
  $(".Cutting").css("display", "none");
}

function filterCutting() {

  $(".Antique").css("display", "none");
  $(".Semi-Antique").css("display", "none");
  $(".Kuwaiti").css("display", "none");
  $(".Kerala").css("display", "none");
  $(".Bombay").css("display", "none");
  $(".Kolkata").css("display", "none");
  $(".Rosegold").css("display", "none");
  $(".Cutting").css("display", "block");
}


function filterProducts(className) {


  $("." + className).css("display", "block");
}

function productHTML() {

  var tempShuffledArray = shuffle(productArray);

  if (fileName == 'products.html') {

    for (var i = 0; i < tempShuffledArray.length; i++) {

      if (tempShuffledArray[i].gram == '') {

        document.getElementById('products-pages').innerHTML += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 element-item '+ tempShuffledArray[i].category +'" data-category="'+ tempShuffledArray[i].category +'">' +
        '<div class="portfolio-fullimage bg-white">' +
        '<img id=' + tempShuffledArray[i].key + ' onerror="errorCode(' + tempShuffledArray[i].key.toString() + ')" src="' + tempShuffledArray[i].productURL03 + '" alt="image_not_found">' +
        '<a href="https://api.whatsapp.com/send?phone=919847916954&text=Hi" class="details-btn"><i class="fal fa-plus"></i></a>' +
        '<div class="item-content">' +
        '<h3 class="item-title">' + tempShuffledArray[i].title + '</h3>' +
        '<span class="item-brand">' + tempShuffledArray[i].karat + '</span>' +
        '</div>' +
        '</div>' +
        '</div>'

      } else {

        document.getElementById('products-pages').innerHTML += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 element-item '+ tempShuffledArray[i].category +'" data-category="'+ tempShuffledArray[i].category +'">' +
        '<div class="portfolio-fullimage bg-white">' +
        '<img id=' + tempShuffledArray[i].key + ' onerror="errorCode(' + tempShuffledArray[i].key.toString() + ')" src="' + tempShuffledArray[i].productURL03 + '" alt="image_not_found">' +
        '<a href="https://api.whatsapp.com/send?phone=919847916954&text=Hi" class="details-btn"><i class="fal fa-plus"></i></a>' +
        '<div class="item-content">' +
        '<h3 class="item-title">' + tempShuffledArray[i].title + '</h3>' +
        '<span class="item-brand">' + tempShuffledArray[i].gram + ' Grams | ' + tempShuffledArray[i].karat + '</span>' +
        '</div>' +
        '</div>' +
        '</div>'
      }
    }

  } else if (fileName == 'add-products.html') {

    for(var i = 0; i < tempShuffledArray.length; i++) {

      document.getElementById('product-listings').innerHTML += '<tr data-aos="fade-up" data-aos-delay="200">'+
        '<td><h6 class="item-title">'+ tempShuffledArray[i].key +'</h6></td>'+
        '<td><img src="'+ tempShuffledArray[i].productURL02 +'" width="100" alt=""></td>'+
        '<td><h6 class="item-title">'+ tempShuffledArray[i].title +'</h6></td>'+
        '<td><h6 class="item-title">'+ tempShuffledArray[i].category +'</h6></td>'+
        '<td><h6 class="item-title">'+ tempShuffledArray[i].gram +'</h6></td>'+
        '<td><h6 class="item-title">'+ tempShuffledArray[i].type +'</h6></td>'+
        '<td><h6 class="item-title">'+ tempShuffledArray[i].karat +'</h6></td>'+
        '</tr>';
    }

  } else {

    for (var i = 0; i < 6; i++) {

      if (tempShuffledArray[i].gram == '') {

        document.getElementById('home-products').innerHTML += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">' +
          '<a href="#!" class="portfolio-fullimage add-effect">' +
          '<img src="' + tempShuffledArray[i].productURL01 + '" alt="image_not_found">' +
          '<span class="item-content-2">' +
          '<strong class="item-title">'+ tempShuffledArray[i].title +'</strong>' +
          '<small class="item-brand">'+ tempShuffledArray[i].karat +'</small>' +
          '</span>' +
          '</a>' +
          '</div>'
      } else {

        document.getElementById('home-products').innerHTML += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">' +
          '<a href="#!" class="portfolio-fullimage add-effect">' +
          '<img src="' + tempShuffledArray[i].productURL01 + '" alt="image_not_found">' +
          '<span class="item-content-2">' +
          '<strong class="item-title">'+ tempShuffledArray[i].title +'</strong>' +
          '<small class="item-brand">'+ tempShuffledArray[i].gram + ' Grams | ' + tempShuffledArray[i].karat +'</small>' +
          '</span>' +
          '</a>' +
          '</div>'
      }
    }
  }
}
