function hamburgerMenu() {
	var menu = document.getElementById("hamburger-menu");
	menu.classList.toggle("toggle-hamburger-menu");
	toggleNav();
}

function toggleNav() {
	var navSize = document.getElementById("mobileNav").style.height;
	if(navSize == 0 || navSize == "0px") {
		openNav();
	} else {
		closeNav();
	}
}

function openNav() {
	document.getElementById("mobileNav").style.height = "100vh";
}

function closeNav() {
	document.getElementById("mobileNav").style.height = "0";
}

$('#myCarousel').on('slid.bs.carousel', function (e) {
  $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

$('#myCarousel').carousel('1') // Will start sliding to the slide 1 and returns to the caller
$('#myCarousel').carousel('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
