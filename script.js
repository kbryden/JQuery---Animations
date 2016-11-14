//Response, using jQuery, to at least two different user interaction events

$("document").ready(function() {

	$(function(){
		//At least one fade animation
		//At least one position animation
		$(".animate1").click(function() {
			$(".recipe-one").fadeIn("normal");
			$(".move-right").animate({
					"margin-left": "100",
				}, 1000, "swing");
            });

		$(".animate2").click(function() {
			$(".recipe-two").slideToggle(1000,"linear");
            });

		$(".animate3").click(function() {
			$(".recipe-three").slideToggle(100);
            });

		$(".animate4").click(function() {
			$(".recipe-four").slideToggle(1000,"swing");
            });

		//At least one implementation of the jQuery animate() function
		$(".animate5").click(function() {
			$(".recipe-five").slideToggle("normal");
			$(".recipe-five").animate({
					margin: "2",
					fontSize: "2em",
				}, 1000, "swing");
            });

		$(".animate6").click(function() {
			$(".recipe-six").slideToggle("normal");
            });

		$(".animate7").click(function() {
			$(".recipe-seven").slideToggle("normal");
            });
		});


	});



//At least one implementation of the jQuery animate() function




