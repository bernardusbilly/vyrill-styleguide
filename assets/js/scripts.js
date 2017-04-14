$(document).ready(() => {
	/**
		Close Card
	*/
	$(".card-container .close-button").click(function() {
		removeCard($(this).parents(".card-container"));
	});

	/**
		Action Wrapper
	*/
	$(".card-container .action-wrapper").on("click", "input", function(event) {
		let e = $(this);
		if (e.is("[name='edit']")) {
			editCard($(e).parents(".card-container"));
		} else if (e.is("[name='like']")) {
			// send changes to backend
		} else if (e.is("[name='flag']")) {
			// send changes to backend
		} else if (e.is("[name='memo']")) {
			event.preventDefault();
			// send changes to backend
			$(e).parents(".action-wrapper").find(".memo-popup").toggle();
		}
	});
	// for memo
	$(".card-container .action-wrapper").on("click", "button", function(event) {
		let e = $(this);
		let p = $(this).parents(".action-wrapper");
		if (e.is("[type='submit']")) {
			$(p).find(".memo-popup").toggle();
		}
		if ($(p).find(".memo-popup textarea").val() === "") {
			$(p).find("input[name='memo']").prop("checked", false);
		} else {
			$(p).find("input[name='memo']").prop("checked", true);
		}
	});


	/**
		Change View for the cards
	*/
	$(".view-wrapper").on("click", "input", function(e) {
		if ($(this).prop("value") === "text-view") {
			changeView("text-view");
		} else if ($(this).prop("value") === "list-view") {
			changeView("list-view");
		} else { // card-view
			changeView("card-view");
		}
	});

	/**
		Activate bxslider
	*/
	$(".bxslider").bxSlider({
		slideWidth: 200,
		slideMargin: 10,
		pager: false,
		controls: true
	});
})