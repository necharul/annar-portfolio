$(document).ready(function(){
	
	
	
/* ===================================== *.Preloader
============================================================== */
		$(window).on("load", function(){
			$("#preloader").fadeOut();
		});
		
		
		
		
/* ====================================== Go to Top Button
============================================================= */
		$(window).on('scroll', function(){
			var scroll = $(window).scrollTop();
			if(scroll < 900) {
				$(".go_top").removeClass("go_top_btn");
				
			}else{
				$(".go_top").addClass("go_top_btn");
			}
		});
		
		
		
		
		
/* ====================== 1.Horizontzal(scroll) Top Nav Menu	
============================================================= */
	
		$(window).on('scroll', function(){
			var scroll = $(window).scrollTop();
			if(scroll < 648){
				$('#top_navbar').removeClass('fixed-nav');
				$('#top_navbar').fadeOut();
			}else{
				$('#top_navbar').addClass('fixed-nav');
				$('#top_navbar').fadeIn();
			}
		});
		/* $(window).width() > 360 function(){
			var scroll = $(window).scrollTop();
			if(scroll < 648){
				$('#top_navbar').removeClass('fixed-nav');
				$('#top_navbar').fadeOut();
			}else{
				$('#top_navbar').addClass('fixed-nav');
				$('#top_navbar').fadeIn();
			}
		}; */
		/* $(window).on('resize', function(){
			if($(window).width() > 360){
				
					var scroll = $(window).scrollTop();
					if(scroll < 380){
						$('#top_navbar').removeClass('fixed-nav');
						$('#top_navbar').fadeOut();
					}else{
						$('#top_navbar').addClass('fixed-nav');
						$('#top_navbar').fadeIn();
					}
				
			}
		}); */
	
/* =============== 1.Respovsive(991px) Horizontzal Top Nav Menu
============================================================ */
	var isMenuOpen = false;

	$(".menu-toggle").click(function(){
		/* $(".menu-toggle").children("span").fadeToggle();
		$("nav").slideToggle(); */
		$('.menu').toggleClass('menu_p');
		isMenuOpen = !isMenuOpen;
	});
	
	/* $(window).on('resize', function(){
			if($(window).width() > 991){
				$('nav').show();
			}else{
				if(isMenuOpen){
					$('nav').show();
				}else{
					$('nav').hide();
				}
			}
	}); */
	
	$(".open-submenu").click(function(){
		$(".dd-menu").slideToggle();
		$(".fa-angle-double-down").toggleClass("fa-angle-double-down-color");
	});	
	
	
	
	
/* =========================================================
 1.Horizontzal(Click Any where "DROP DOWN" hide) Top Nav Menu	
============================================================= */
	$('#home, #about, #works, #features, #achivement, #counter, #team, #video, #skill, #socail-platform, #slider, #news, #form, #contact, #footer').click(function(){
		$(".dd-menu").slideUp();
	});
	
	
	
	
/* =============================================================
2.1.Home Sidebar(Click Any where "Side Bar" hide) 
==============================================================*/
/* sidebar-dd-menu */
	$('#top_navbar, .hide_sidebar, .home_page, #about, #works, #features, #achivement, #counter, #team, #video, #skill, #socail-platform, #slider, #news, #form, #contact, #footer').click(function(){
		$(".sidebar-dd-menu").slideUp();
	});
/* left_sidebar	 */
	
	$('#top_navbar, .home_page, #about, #works, #features, #achivement, #counter, #team, #video, #skill, #socail-platform, #slider, #news, #form, #contact, #footer').click(function(){
		$('#home').removeClass('collapse');
	});
	
	
/* ========================= 2.1.1.Side Nav Bar Logo	
======================================================== */
	$(".logo_circle").hover(
		function(){
			$('.fa-circle').removeClass("circle");},    
		function(){
			$('.fa-circle').addClass("circle");}
	);
/* ======================== 2.1.2.Side Nav Bar Aera	 
===================================================== */

	/* Drop Down */
	$(".open-item").click(function(){
		$(".sidebar-dd-menu").slideToggle();
	});
	
	
	
/* ===================2.2.Home Sidebar*
=============================================*/
	
		$('.sidebar_icon').click(function(){
			$('#home').toggleClass('collapse');
		});
	
	
	
/* =========================== 2.3.Scroll To Continue
============================================================ */
	$(".scroll-btn").hover(
		function(){
			$('.fa-angle-down').removeClass("stop-anim");},    
		function(){
			$('.fa-angle-down').addClass("stop-anim");}
	);
	


  
	
	
	
/* ===========================Isotope 
===============================================*/
	
		var $grid = $('.filter-area').isotope({
		  itemSelector: '.filter-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
		  }
		});
		
		// filter items on button click
		$('.isotope-menu').on( 'click', 'span', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		
		// For Isotope Menu Active Class
		$('.isotope-menu span').on('click', function(event){
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
/* ======== 4.2.Works Content (Isotope Plugin) ===========
================================================= */

		$('.test-popup-link').magnificPopup({
		  type: 'image',
		  gallery:{
			enabled:true
		  }
		  // other options
		});




/* ================================== 7.Counter
======================================================= */
	$('.counter').counterUp({
		delay: 50,
		time: 2500
	});

	
	
	
	
/* ================================== 12.Swiper slider
======================================================= */
	var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		
		//If you want To autoplay (Uncomment please)
		/* autoplay: { 
			delay: 6000,
			disableOnInteraction: false,
		}, */
	});








	
});



	
/* =========================== 2.2.Home Body owlCarousel 
========================================================= */

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		autoplay: false,
		autoplayHoverPause: true,
		mouseDrag: false,
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

/* ======================== 10.2.Our Skill Content
===================================================== */
 /* WOW.js */

	new WOW().init();
	
	

/* =====================Video Player
===================================== */


var video = document.querySelector(".video");
var juice = document.querySelector(".orange-juice");
var bttn = document.querySelector("#play-pause");

function togglePlayPause() {
	if (video.paused) {
		bttn.className = "pause";
		video.play();
	} else {
		bttn.className = "play";
		video.pause();
	}
}

var player = videojs('vid1', {
  responsive: true
});
var player = videojs('vid1', {
  fill: true
});


$(function(){
	
  $('.hey').venobox(); 
  
});




























