document.getElementById("mobileMenu").addEventListener("click", function(){
  document.getElementById("mobileMenu").load = true;
  document.getElementById("mobileMenu").play = true;
  toggleNav();
});

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