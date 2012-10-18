/* Jquery function 
 * Author: Minhnhut Vo
 * Created Date: 10/12/12
 */

function chasingShadow(){
	var element = $("#ppshadow");
	var containerWidth = $("#container").width() - 100;
	var containerHeight = $("#container").height() - 150;
	var centerX = containerWidth/2;
	var centerY = containerHeight/2;
	
	var oldTop = element.position().top;
	var oldLeft = element.position().left;
	var newTop = Math.random() * containerHeight;
	var newLeft = Math.random() * containerWidth;
	var moveUp = newTop - oldTop;
	var moveLeft = newLeft - oldLeft;
	// To bottom right
	if(moveUp > 0 && moveLeft > 0) {
		element.css('background-image','url(./images/ppshadowright.png)');
		element.animate({top: '+='+moveUp,left: '+='+moveLeft}, 200, function(){
			element.css('background-image','url(./images/ppshadowstandright.png)');
			element.data('nomouse', false);
		});
	}
	// To top left
	else if(moveUp < 0 && moveLeft < 0) {
		moveUp = Math.abs(moveUp);
		moveLeft = Math.abs(moveLeft);
		element.css('background-image','url(./images/ppshadowleft.png)');
		element.animate({top: '-='+moveUp,left: '-='+moveLeft}, 200, function(){
			element.css('background-image','url(./images/ppshadowstandleft.png)');
			element.data('nomouse', false);
		});
	}
	// To bottom left
	else if(moveUp > 0 && moveLeft < 0){
		moveLeft = Math.abs(moveLeft);
		element.css('background-image','url(./images/ppshadowleft.png)');
		element.animate({top: '+='+moveUp,left: '-='+moveLeft}, 200, function(){
			element.css('background-image','url(./images/ppshadowstandleft.png)');
			element.data('nomouse', false);
		});
	}
	// To top right
	else{
		moveUp = Math.abs(moveUp);
		element.css('background-image','url(./images/ppshadowright.png)');
		element.animate({top: '-='+moveUp,left: '+='+moveLeft}, 200, function(){
			element.css('background-image','url(./images/ppshadowstandright.png)');
			element.data('nomouse', false);
		});
	}
}

$(document).ready(function() {
	var tinkerCursor = false;
	var pushpinCursor = false;
	$("#tinker").click(function(){
		if(tinkerCursor == false){
			$('body').addClass("tinkerCursor");
			$('body').removeClass("pinCursor");
			tinkerCursor = true;
			pushpinCursor = false;
			$("#tinker").css('background-image','none'	);
			$("#chaseShadow").css('background-image','url(./images/pushpin.gif)');
		}else{
			$('body').removeClass("tinkerCursor");
			tinkerCursor = false;
			$("#tinker").css('background-image','url(./images/tinker.gif)');
		}
	});
	
	$("#chaseShadow").click(function(){
		if(pushpinCursor == false){
			$('body').addClass("pinCursor");
			$('body').removeClass("tinkerCursor");
			$('#container').append('<div id="ppshadow"></div>');
			pushpinCursor = true;
			tinkerCursor = false;
			$("#chaseShadow").css('background-image','none'	);
			$("#tinker").css('background-image','url(./images/tinker.gif)');
			$("#ppshadow").mouseover(function(){
				var el = $(this);
				if(el.data('nomouse')) return;
				el.data('nomouse', true);
				chasingShadow();});
			$("#ppshadow").mousemove(function(){
				var el = $(this);
				if(el.data('nomouse')) return;
				el.data('nomouse', true);
				chasingShadow();});
			$("#ppshadow").click(function(){
				var el = $(this);
				el.stop();
				alert("Yay, You helped Peter Pan catched his shadow!");
				$('body').removeClass("pinCursor");
				pushpinCursor = false;
				$("#chaseShadow").css('background-image','url(./images/pushpin.gif)');
				$('#ppshadow').remove()});
		}else{
			$('body').removeClass("pinCursor");
			pushpinCursor = false;
			$("#chaseShadow").css('background-image','url(./images/pushpin.gif)');
			$('#ppshadow').remove()
		}
	});
	
});