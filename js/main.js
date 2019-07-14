$(document).ready(function(){


// active links (a) above blue line
var a = $("header nav div.menu a");
var ab = $("header div.mini_menu a");

a.click(function(){
    a.removeClass('active');
    $(this).addClass('active');
});




// main manu of page scrolling
$(window).scroll(function() {
	// console.log(window.scrollY);
	if (window.scrollY > 80) {
		$("nav").addClass("active");
        $("div").addClass("active");
	} else {
		$("nav").removeClass("active");
	}
});




// move page when scroll by links
var scrll = $(".scroll_menu");

$(window).scroll(function() {
    scrll.each(function(index, el){
        var top = $(el).offset().top;
        var bottom = top + $(el).height();
        if(window.scrollY >= top - 10 && window.scrollY <= bottom) {
            a.removeClass('active');
            $("header nav div.menu a[data-target='#" + el.id + "']").addClass('active');
            ab.removeClass('aaa');
            $("header div.mini_menu a[data-target='#" + el.id + "']").addClass('aaa');
        }
    });
});
 

ab.click(function(){
    ab.removeClass('aaa');
    $(this).addClass('aaa');
});





// 4-sahifa Service2 page 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    // autoPlay:
    autoplay: true,
    autoplayTimeout: 6000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});






// returning home page when press the button
var but = $("button.main_button");

but.click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});




// when scrolls from top to 700 button visibile or not. 
$(window).scroll(function() {
  
    if (window.scrollY > 700) {
        $("button.main_button").addClass("hidden_button");
    } else {
        $("button.main_button").removeClass("hidden_button");
    }
});





// when press links in nav, it automatically returns its page
var nav_a = $("#home div.menu a");

    nav_a.click(function() {
        var data = $(this).data("target");
        // alert(data)
        var t = $(data).offset().top;
        $("html, body").animate({
            scrollTop: t
        }, 1000)
    })

// when press links in scroll_nav, it automatically returns its page
var min_nav = $("#home div.scroll_nav a");

    min_nav.click(function() {
        var data = $(this).data("target");
        // alert(data)
        var t = $(data).offset().top;
        $("html, body").animate({
            scrollTop: t
        }, 1000)
    });




// when click the button in scroll_nav, mobile menu appears
var button = $("div.scroll_nav button");

button.click(function() {
        $("div.mobile_menu").toggleClass('scroll_aside');
        
    });





});