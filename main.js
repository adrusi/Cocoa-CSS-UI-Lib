var toolbarActions = {},
	sidebarActions = {},
	menubarActions = {};
	

function updateClock() {
	var date = new Date(),
		hrs = (date.getHours() > 12) ? date.getHours() - 12 : date.getHours(),
		mins = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
		ampm = (date.getHours() >= 12) ? 'PM' : 'AM',
		day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][date.getDay()],
		secs = date.getSeconds();
		
	$('#clock').html(day + ' ' + hrs + ':' + mins + ' ' + ampm);
	setTimeout(function() {
		updateClock();
		setInterval('updateClock()', 60000);
	}, 60000 - secs * 1000);
}
$(document).ready(function() {
	updateClock();
	// The following event blocks are responsible for the behavior of the menubar.
	$('#menubar').click(function() {
		$('#menubar').addClass('active');
	});
	$('#body, #footer').click(function() {
		$('#menubar').removeClass('active');
	});
	$('#menubar li:not(.disabled)').hover(function() {
		$(this).addClass('selected').children('ul').css('display', 'block!important');
	}, function() {
		$(this).removeClass('selected').children('ul').css('display', 'none!importantπ');
	});
	$('#menubar li:has(ul)').addClass('parent');
	// These react when a button is pressed
	$('#menubar li').not('.parent').not('.disabled').click(function() {
		$('#menubar').removeClass('active');
		$('#menubar .selected').removeClass('selected');
	});
	$('aside li').click(function() {
		$('aside .selected').removeClass('selected'); // make sure no sidebar button is selected
		$(this).addClass('selected'); // make the clicked link selected
	});
});