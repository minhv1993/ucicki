function customcursor(element,imgUrl) {
	$('body').append('<img style="position:absolute;display:none;cursor:none;" id="mycursor" src="'+imgUrl+'" />');
	element.css('cursor','none');
	$(element).hover(function() {
		$('#mycursor').show();
	},function() {
		$('#mycursor').hide();		
	});
	$(element).mousemove(function(e){
			$('#mycursor').css('left', e.clientX - 1).css('top', e.clientY + 1);
	});
}

$(document).ready(function() {
	customcursor($('#body'),'./images/tinkerCursor.gif');
	});