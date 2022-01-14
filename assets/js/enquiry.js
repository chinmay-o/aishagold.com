
$(".ba-we-love-subscribers-fab").click(function() {
	$('.ba-we-love-subscribers-fab .wrap').toggleClass("ani");
	$('.ba-we-love-subscribers').toggleClass("open");
	$('.img-fab.img').toggleClass("close");
});

$("#contact_form").submit((e)=>{
		e.preventDefault()
		$.ajax({
				url:"https://script.google.com/macros/s/AKfycbzdP5PXCQ_ld-UZXKubofXFIWZY3BWvbKawafUNq7NGj98mBUR1skhp6tDhKSH3zN95/exec",
				data:$("#contact_form").serialize(),
				method:"POST",
				success:function (response){
						$("div").removeClass("open ani close")
				},
				error:function (err){
						alert("Something Error");
				}
		})
})
