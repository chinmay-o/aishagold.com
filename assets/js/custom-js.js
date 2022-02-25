

$(".ba-we-love-subscribers-fab").click(function() {

	$('.ba-we-love-subscribers-fab .wrap').toggleClass("ani");
	$('.ba-we-love-subscribers').toggleClass("open");
	$('.img-fab.img').toggleClass("close");
});

$('#index').click(function() {
    location.reload();
});

$("#Service").click(function() {

    $('html, body').animate({
        scrollTop: $("#ServiceContent").offset().top - 120
      }, 1000);
});

$("#Products").click(function() {

    $('html, body').animate({
        scrollTop: $("#ProductsContent").offset().top - 120
      }, 1000);
});

$("#About_Us").click(function() {

    $('html, body').animate({
        scrollTop: $("#AboutContent").offset().top - 120
      }, 1000);
});

$("#Contact").click(function() {

    $('html, body').animate({
        scrollTop: $("#ContactContent").offset().top - 120
      }, 1000);
});

$("#ServiceMobile").click(function() {

    $('html, body').animate({
        scrollTop: $("#ServiceContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});

$("#ProductsMobile").click(function() {

    $('html, body').animate({
        scrollTop: $("#ProductsContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});

$("#About_UsMobile").click(function() {

    $('html, body').animate({
        scrollTop: $("#AboutContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});

$("#ContactMobile").click(function() {

    $('html, body').animate({
        scrollTop: $("#ContactContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});

$("#beginNow").click(function() {

    $('html, body').animate({
        scrollTop: $("#ContactContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});

function productsMove() {

	$('html, body').animate({
			scrollTop: $("#ProductsContent").offset().top - 120
		}, 1000);
	$(".sidebar-menu, .overlay").removeClass("active");
}

$("#beginNowTwo").click(function() {

    $('html, body').animate({
        scrollTop: $("#ContactContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});
