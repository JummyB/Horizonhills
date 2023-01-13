// navify

function navify(){
	var nav = document.getElementById("nav");
	console.log(pageYOffset);
	if (window.pageYOffset > 1900) {
		nav.className = "hidden-xs nav-on-scroll-1";
	}
	else if (window.pageYOffset > 400) {
		nav.className = "hidden-xs nav-on-scroll"
	}
	else{
		nav.className = "hidden-xs";
	}
}

// Modal-box
var modalBox = document.getElementById("modal");
var x = 0;
function displayModal(){
	if (x == 0) {
		modalBox.style.display = "block"
		x = 1;
	}
	else{
		modalBox.style.display = "none";
		x = 0;
	}
}

