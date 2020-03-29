$('#humber-btn').click(function(){
	$(this).parent('.container').children('#navbarSupportedContent').toggleClass('in');
});
$(document).ready(function($) {
	$('.navbar-toggler').click(function(event) {
		/* Act on the event */
		$('.primary-header').toggleClass('show-in');
		$(this).children('span').toggleClass('icon-close');
	});	
});

//dropdown meni item clickable
$('li.dropdown').on('click', function() {
    var $el = $(this);
    var $a = $el.children('a.dropdown-toggle');
    if ($a.length && $a.attr('href')) {
        location.href = $a.attr('href');
    }
});

//dropdown on hover
$('.dropdown').hover(
    function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();
    },
    function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
    }
);

$('.dropdown-menu').hover(
    function() {
        $(this).stop(true, true);
    },
    function() {
        $(this).stop(true, true).delay(100).fadeOut();
    }
);