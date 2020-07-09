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

setTimeout(function() {
   $(".listing-item-button-cover, .listing-item-button, .listing-item-button-text").addClass("is-animated");
}, 500);
