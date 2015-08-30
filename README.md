# star_rating

<html>
	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>

	<body>
		<div class="container">
		<div id='start_container'>

			<br>
			<div class="row">
				<div class="col-md-4">
					<p>Rating: <span id='rating'/></p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<p>Hover rating: <span id='hover_rating'/></p>
				</div>
			</div>

			<br>

			</div>
			<div class="row">

			<script>
				for (var i = 0; i < 10; i++) {
					$('#start_container').after("<div class='col-md-1'><img id='star" + i + "' src='emptystar.png' width='50' height='50'/></div>");
				};
				var rating;
				$('img').mouseenter(function(){
					if ($(this).attr('id')) {
						var number = $(this).attr('id').slice(-1);
						if (new Number(number) instanceof Number){
							$('#hover_rating').text(10 - number);
							changeBackground(parseInt(number));
						}
					};
				}).mouseleave(function(){
					$('img').attr('src','emptystar.png');
					$('#hover_rating').empty();
					changeBackground(rating);
				});
				$('img').click(function(){
					if ($(this).attr('id')) {
						var number = $(this).attr('id').slice(-1);
						if (new Number(number) instanceof Number){
							rating = number;
							$('#rating').text(10 - number);
							changeBackground(parseInt(number));
						}
					};
				});
				$('#save').click(function(){
					var final_rating = 10 - parseInt(rating);
					$('#star0').after('<br><br> Rating: <b>' + final_rating + '</b>');
				});
				function changeBackground(star_number){
					for (var i=10; i>=0; i--){
						var star = '#star' + i;
						if (i>=star_number){
							$(star).attr('src','fullstar.png');
						} else {
							$(star).attr('src','emptystar.png');
						}
					}
				}
			</script>
			</div>
			
		</div>
		</div>
	</body>
</html>
