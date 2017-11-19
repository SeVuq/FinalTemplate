
$(document).ready(function() {

  $(window).scroll(function () {
    if ($(window).scrollTop() >135) {
      $('nav').addClass('fixed');
    } else{
      $('nav').removeClass('fixed');
    }
  });

$('.careImage').click(function(){
  $('.popup , .popupImage').fadeIn('slow');
});
$('.close , .popup').click(function(){
  $('.popup , .popupImage').fadeOut('slow');
});


});
$('.tel').focus(function() {
    $(this).attr('placeholder', '+7 (___) ___-__-__')
}).blur(function() {
    $(this).attr('placeholder', 'Телефон')
})
$(".jsPar").click(function(){
	$(".jsPar").removeClass("parActive")
    $(this).addClass("parActive");

    $(".js_contact_map, .js_caracter").css("display","none");
    
    $( "#"+ $(this).data("target")).css("display","block");
})

