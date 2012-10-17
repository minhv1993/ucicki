function customcursor(element,imgUrl) {
	$('body').append('<img style="position:absolute;display:none;cursor:none;" id="mycursor" src="'+imgUrl+'" />');
	$('#mycursor').show();
	$(window).mousemove(function(e){
		$('#mycursor').css('left', e.pageX - 16).css('top', e.pageY - 16);
	});
}

function chasingShadow(){
	var element = $("#ppshadow");
	var width = $("#container").width() - 100;
	var height = $("#container").height() - 150;
	var centerX =  width/2;
	var centerY = height/2;
	
	var top = Math.random() * height;
	var left = Math.random() * width;
	//element.animate({top:top,left:left});
	if(left > centerX){
		element.css('background-image','url(./images/ppshadowstandright.png)');
	}else{
		element.css('background-image','url(./images/ppshadowstandleft.png)');
	}
	element.css('top',top+'px').css('left',left+'px');
}

$(document).ready(function() {
	var tinkerCursor = false;
	$("#tinker").click(function(){
		if(tinkerCursor == false){
			customcursor($('#body'),'./images/tinkerCursor.gif');
			tinkerCursor = true;
			$("#tinker").css('background-image','none'	);
		}else{
			$('#mycursor').remove();
			$("#body").css('cursor','auto');
			tinkerCursor = false;
			$("#tinker").css('background-image','url(./images/tinker.gif)');
		}
	});
	
	$("#ppshadow").mouseover(chasingShadow);
	$("#ppshadow").mousemove(chasingShadow);
});