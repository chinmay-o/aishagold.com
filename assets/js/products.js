
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

function productsShowcase () {

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

function productHTML() {

  if (fileName == 'products.html') {

    for (var i = 0; i < productArray.length; i++) {

      document.getElementById('products-pages').innerHTML += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 element-item prints " data-category="'+ productArray[i].category +'">' +
        '<div class="portfolio-fullimage bg-white">' +
        '<img id='+ productArray[i].key +' onerror="errorCode('+ productArray[i].key.toString() +')" src="' + productArray[i].productURL01 + '" alt="image_not_found">' +
        '<a href="#!" class="details-btn"><i class="fal fa-plus"></i></a>' +
        '<div class="item-content">' +
        '<h3 class="item-title">'+ productArray[i].title +'</h3>' +
        '<span class="item-brand">'+ productArray[i].gram + ' | ' + productArray[i].karat +'</span>' +
        '</div>' +
        '</div>' +
        '</div>'
    }

  } else if (fileName == 'add-products.html') {

    for(var i = 0; i < productArray.length; i++) {

      document.getElementById('product-listings').innerHTML += '<tr data-aos="fade-up" data-aos-delay="200">'+
        '<td><img src="'+ productArray[i].productURL01 +'" width="100" alt=""></td>'+
        '<td><h6 class="item-title">'+ productArray[i].title +'</h6></td>'+
        '<td><h6 class="item-title">'+ productArray[i].category +'</h6></td>'+
        '<td><h6 class="item-title">'+ productArray[i].gram +'</h6></td>'+
        '<td><h6 class="item-title">'+ productArray[i].karat +'</h6></td>'+
        '</tr>';
    }

  } else {

    for (var i = 0; i < 6; i++) {

      document.getElementById('home-products').innerHTML += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">' +
        '<a href="#!" class="portfolio-fullimage add-effect">' +
        '<img src="' + productArray[i].productURL01 + '" alt="image_not_found">' +
        '<span class="item-content-2">' +
        '<strong class="item-title">'+ productArray[i].title +'</strong>' +
        '<small class="item-brand">'+ productArray[i].gram + ' | ' + productArray[i].karat +'</small>' +
        '</span>' +
        '</a>' +
        '</div>'
    }
  }
}
