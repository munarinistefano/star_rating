$(document).ready(function() {

var rating = 10;

for (var i = 0; i < 10; i++) {
	$('#start_container').after("<div class='col-md-1'><img id='star" + i + "' src='images/emptystar.png' width='50' height='50'/></div>");
	//$('#start_container').after("<div id='star" + i + "' class='star-five'/>");//<img id='star" + i + "' src='images/emptystar.png' width='50' height='50'/></div>");
};

var t=null;
$('img')
	.mouseenter(function(){
		if ($(this).attr('id')) {
			var number = $(this).attr('id').slice(-1);
			if (new Number(number) instanceof Number){
				$('#hover_rating').text(10 - number);
				changeBackground(parseInt(number));
				clearTimeout(t);
			}
		};
	})
	.mouseleave(function(){
		t = setTimeout(function() {
        	goBack(rating);
    	}, 500);
	})
	.click(function(){
		if ($(this).attr('id')) {
			var number = $(this).attr('id').slice(-1);
			if (new Number(number) instanceof Number){
				rating = number;
				$('#rating').text(10 - number);
				changeBackground(parseInt(number));
			}
		};
	});

//Change star src (empty star to full star)
function changeBackground(star_number){
	for (var i=10; i>=0; i--){
		var star = '#star' + i;
		if (i>=star_number){
			$(star).attr('src','images/fullstar.png');
		} else {
			$(star).attr('src','images/emptystar.png');
		}
	}
}

//Restore the rating to saved value
function goBack(rating_value){
	$('img').attr('src','images/emptystar.png');
	$('#hover_rating').empty();
	changeBackground(rating_value);
}

});