/* Sidebar navigation */
/* ------------------ */

/* Show navigation when the width is greather than or equal to 991px */

$(document).ready(function(){

  $(window).resize(function()
  {
    if($(window).width() >= 767){
      $(".sidey").slideDown(150);
    }                
  });

});

$(document).ready(function(){

  $(".has_submenu > a").click(function(e){
    e.preventDefault();
    var menu_li = $(this).parent("li");
    var menu_ul = $(this).next("ul");

    if(menu_li.hasClass("open")){
      menu_ul.slideUp(150);
      menu_li.removeClass("open")
    }
    else{
      $(".nav > li > ul").slideUp(150);
      $(".nav > li").removeClass("open");
      menu_ul.slideDown(150);
      menu_li.addClass("open");
    }
  });
  
});

/* Sidebar dropdown */

$(document).ready(function(){
  $(".sidebar-dropdown a").on('click',function(e){
      e.preventDefault();

      if(!$(this).hasClass("open")) {
        // hide any open menus and remove all other classes
        $(".sidebar .sidey").slideUp(150);
        $(".sidebar-dropdown a").removeClass("open");
        
        // open our new menu and add the open class
        $(".sidebar .sidey").slideDown(150);
        $(this).addClass("open");
      }
      
      else if($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(".sidebar .sidey").slideUp(150);
      }
  });

});



/* ***************************** */

/* Revolution Slider JS */
/* ----------------------------- */
var revapi;
	jQuery(document).ready(function() {

		   revapi = jQuery('.banner').revolution(
			{
				delay:8000,
				
				startheight:550,
				hideThumbs:10,
				
				navigationType:"none",		// navigation bullet display
				onHoverStop:"on",
				hideThumbsOnMobile:"off",	// thumb is not responsive on mobile view
				
				touchenabled:"on",			//touch enable on the slide
				hideArrowsOnMobile: "on",
				
				stopAtSlide:-1,				// slide loop for infinite time
				stopAfterLoops:-1,
				
				hideCaptionAtLimit:0,
				fullWidth:"off",
				forceFullWidth:"on",
				
				shadow:0					// bottom shadow of the slider you have possible value choise(0, 1, 2, ..)

			});

	});	


/* ***************************** */

/* Way point for feature block */
/* ----------------------- */
$(document).ready(function(){

	$('.f-one').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('flipInY');
	}, { offset: '75%' });

	$('.f-two').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('flipInY');
	}, { offset: '75%' });

	$('.f-three').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('flipInY');
	}, { offset: '75%' });

	$('.f-four').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('flipInY');
	}, { offset: '75%' });

});
/* ************************************** */

/* Way point for Service-one block */
/* ----------------------- */


	$('.sitem-one').waypoint(function(down){
		$(this).addClass('br-red');
		$(this).addClass('color-change');
	}, { offset: '65%' });

	$('.sitem-two').waypoint(function(down){
		$(this).addClass('br-lblue');
		$(this).addClass('color-change');
	}, { offset: '65%' });

	$('.sitem-three').waypoint(function(down){
		$(this).addClass('br-green');
		$(this).addClass('color-change');
	}, { offset: '65%' });

/* ************************************** */


/* PrettyPhoto for Recent Post */
/* ----------------------- */

$(".p-item-link").prettyPhoto({
   overlay_gallery: false, social_tools: false
});

/* *************************************** */  




/* *************************************** */  
/* Way point for Information block */
/* ----------------------- */

$(document).ready(function(){

	$('.s-one').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('bounceInDown');
	}, { offset: '55%' });

	$('.s-two').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('bounceInDown');
	}, { offset: '55%' });

	$('.s-three').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('bounceInDown');
	}, { offset: '55%' });

	$('.s-four').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('bounceInDown');
	}, { offset: '55%' });

});

/* ************************************** */


/* Tooltip */
/* -------- */

$('.bs-tooltip').tooltip();


/* ************************************** */

/* Scroll to Top */
/* ------------- */

$(document).ready(function(){
  $(".totop").hide();

  $(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop()>300)
      {
        $('.totop').slideDown();
      } 
      else
      {
        $('.totop').slideUp();
      }
    });

    $('.totop a').click(function (e) {
      e.preventDefault();
      $('body,html').animate({scrollTop: 0}, 500);
    });

  });
});

/* ******************************************* */

/* ************** Way point js ****************** */

/* Map */

$(document).ready(function(){

	$('.c-map i').waypoint(function(down) {
			$(this).addClass('animation');
			$(this).addClass('fadeInDown');
		}, { offset: '65%' });
		
	$('.c-map span.label').waypoint(function(down) {
			$(this).addClass('animation');
			$(this).addClass('fadeInDown');
		}, { offset: '64%' });
		
});
/* ******************************************* */

/* *************************************** */  

/* Progressbar animation */
/* --------------------- */

$(document).ready(function(){
    setTimeout(function(){

        $('.bar .progress .progress-bar').each(function() {
            var $bar = $(this);
            var $perc = $bar.attr("aria-valuemax");

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc>=$perc) {
                    clearInterval(progress);
                } else {
                    current_perc +=8;
                    $bar.css('width', (current_perc)+'%');
                }


            }, 500);

        });

    },500);
});

/* *************************************** */  

/* PrettyPhoto for Gallery */
/* ----------------------- */

$(".prettyphoto").prettyPhoto({
   overlay_gallery: false, social_tools: false
});
        

/* Isotype */

// cache container
var $container = $('#portfolio');
// initialize isotope
$container.isotope({
  // options...
});

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});           
        
/* *************************************** */  

/*MY FUNCTIONS*/


$(function() {
	/*Menu Dropdowns Automatically*/
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});

	/*Turn Active State On on Current Page*/
	$("#home a:contains('HOME')").parent().addClass('active');
	$("#about a:contains('ABOUT')").parent().addClass('active');
	$("#service a:contains('WHAT')").parent().addClass('active');
	$("#blog a:contains('BLOG')").parent().addClass('active');
	$("#contact a:contains('CONTACT')").parent().addClass('active');

});

/*TECHNOLOGY SLIDER*/

;( function( $, window, undefined ) {

	'use strict';

	$.CatSlider = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	$.CatSlider.prototype = {

		_init : function( options ) {

			// the categories (ul)
			this.$categories = this.$el.children( 'ul' );
			// the navigation
			this.$navcategories = this.$el.find( 'nav > a' );
			var animEndEventNames = {
				'WebkitAnimation' : 'webkitAnimationEnd',
				'OAnimation' : 'oAnimationEnd',
				'msAnimation' : 'MSAnimationEnd',
				'animation' : 'animationend'
			};
			// animation end event name
			this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
			// animations and transforms support
			this.support = Modernizr.csstransforms && Modernizr.cssanimations;
			// if currently animating
			this.isAnimating = false;
			// current category
			this.current = 0;
			var $currcat = this.$categories.eq( 0 );
			if( !this.support ) {
				this.$categories.hide();
				$currcat.show();
			}
			else {
				$currcat.addClass( 'tech-current' );
			}
			// current nav category
			this.$navcategories.eq( 0 ).addClass( 'tech-selected' );
			// initialize the events
			this._initEvents();

		},
		_initEvents : function() {

			var self = this;
			this.$navcategories.on( 'click.catslider', function() {
				self.showCategory( $( this ).index() );
				return false;
			} );

			// reset on window resize..
			$( window ).on( 'resize', function() {
				self.$categories.removeClass().eq( 0 ).addClass( 'tech-current' );
				self.$navcategories.eq( self.current ).removeClass( 'tech-selected' ).end().eq( 0 ).addClass( 'tech-selected' );
				self.current = 0;
			} );

		},
		showCategory : function( catidx ) {

			if( catidx === this.current || this.isAnimating ) {
				return false;
			}
			this.isAnimating = true;
			// update selected navigation
			this.$navcategories.eq( this.current ).removeClass( 'tech-selected' ).end().eq( catidx ).addClass( 'tech-selected' );

			var dir = catidx > this.current ? 'right' : 'left',
				toClass = dir === 'right' ? 'tech-moveToLeft' : 'tech-moveToRight',
				fromClass = dir === 'right' ? 'tech-moveFromRight' : 'tech-moveFromLeft',
				// current category
				$currcat = this.$categories.eq( this.current ),
				// new category
				$newcat = this.$categories.eq( catidx ),
				$newcatchild = $newcat.children(),
				lastEnter = dir === 'right' ? $newcatchild.length - 1 : 0,
				self = this;

			if( this.support ) {

				$currcat.removeClass().addClass( toClass );
				
				setTimeout( function() {

					$newcat.removeClass().addClass( fromClass );
					$newcatchild.eq( lastEnter ).on( self.animEndEventName, function() {

						$( this ).off( self.animEndEventName );
						$newcat.addClass( 'tech-current' );
						self.current = catidx;
						var $this = $( this );
						// solve chrome bug
						self.forceRedraw( $this.get(0) );
						self.isAnimating = false;

					} );

				}, $newcatchild.length * 90 );

			}
			else {

				$currcat.hide();
				$newcat.show();
				this.current = catidx;
				this.isAnimating = false;

			}

		},
		// based on http://stackoverflow.com/a/8840703/989439
		forceRedraw : function(element) {
			if (!element) { return; }
			var n = document.createTextNode(' '),
				position = element.style.position;
			element.appendChild(n);
			element.style.position = 'relative';
			setTimeout(function(){
				element.style.position = position;
				n.parentNode.removeChild(n);
			}, 25);
		}

	}

	$.fn.catslider = function( options ) {
		var instance = $.data( this, 'catslider' );
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				instance[ options ].apply( instance, args );
			});
		}
		else {
			this.each(function() {
				instance ? instance._init() : instance = $.data( this, 'catslider', new $.CatSlider( options, this ) );
			});
		}
		return instance;
	};

} )( jQuery, window );


/*----------------------------------------------------*/
/*	Nivo Slider
/*----------------------------------------------------*/

jQuery(window).load(function() {
    jQuery('#nivoslider').nivoSlider({
        effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
        slices: 15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: 500, // Slide transition speed
        pauseTime: 5000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: true, // Next & Prev navigation
        controlNav: false, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        pauseOnHover: true, // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        prevText: '', // Prev directionNav text
        nextText: '', // Next directionNav text
        randomStart: false, // Start on a random slide
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    });
});


jQuery('.slider-wrapper').hover(function () {
        jQuery('.nivo-prevNav').stop().animate({
            "opacity": 1
        }, 'easeIn');
        jQuery('.nivo-nextNav').stop().animate({
            "opacity": 1
        }, 'easeIn');
    }, function () {
        jQuery('.nivo-prevNav').stop().animate({
            "opacity": 0
        }, 'easeIn');
        jQuery('.nivo-nextNav').stop().animate({
            "opacity": 0
        }, 'easeIn');
    }

);

