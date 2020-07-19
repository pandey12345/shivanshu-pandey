$(document).ready(function() {

$('.div_1').slideDown(2000, function(){
	$('.Section').fadeIn(1000);
	$('.wrapper').fadeIn(1000);
	$('.btn_1').fadeIn(1000);
});

$('.btn_1').click(function(){
	$('.div_1').slideUp(2500);
	$('.Box').fadeIn(4000);
	$('.wrapper').fadeOut(2000);
});

var click = 1;

$('.btn').click(function(){
	var images = ["url('burger.jpg')","url('pizza.jpg')","url('momos.jpg')"],
	    title = ["Chicken Burger" , "Pizza" , "Momos"],
	    main_course = ["1 burger 200g" , "1 medium pizza" , "12 momos"],
	    content_1 = ["1 medium fries" , "1 ginger bread" , "1 spring roll"],
	    content_2 = ["1 Pepsi" , "1 Pepsi" , "1 Smoothy"],
	    content_3 = ["2 Ketchup sachets" , "2 Ketchup sachets", "2 chutney sachets"],
	    price = ["279Rs" , "679Rs" , "249Rs"];

if (click > images.length - 1) {
	click = 0;
}	    

$('.image').css('background-image' , images[click]);
$('.title').html(title[click]);
$('.main').html(main_course[click]);
$('.content_1').html(content_1[click]);
$('.content_2').html(content_2[click]);
$('.content_3').html(content_3[click]);
$('.price').html(price[click]);

click++;

});

});