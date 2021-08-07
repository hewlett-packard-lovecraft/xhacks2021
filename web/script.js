var lectnav_enabled = false

/*
var lectures_enabled = {
	"linear-approximation": false
}*/

var prev_lecture = "linear-approximation";

// Slides out the sidenav
function open_sidenav() {
 	document.getElementById("main-sidenav").style.width = "250px";
 	document.getElementById("lecture").style.marginLeft = "250px";
}

// Slides in the sidenav
function close_sidenav() {
 	document.getElementById("main-sidenav").style.width = "0";
 	document.getElementById("lecture").style.marginLeft = "0";

 	lectnav_enabled = true
 	toggle_lectnav();
}

// Toggles the lecture panel
function toggle_lectnav() {
	// If the lecture panel is not displayed, display it.
	if(!lectnav_enabled) {
		document.getElementById("lecture-list").classList.remove("lecture-fade-out");
		document.getElementById("lecture-list").classList.add("lecture-fade-in");

		document.getElementById("lecture").style.width = "100vw";
		document.getElementById("lecture-list").style.opacity = "1";
		lectnav_enabled = true
	}
	// If the lecture panel is displayed, hide it.
	else if(lectnav_enabled) {
		document.getElementById("lecture-list").classList.remove("lecture-fade-in");
		document.getElementById("lecture-list").classList.add("lecture-fade-out");

		document.getElementById("lecture").style.width = "0";
		document.getElementById("lecture-list").addEventListener("animationend", set_opacity_none("lecture-list"));

		lectnav_enabled = false

		// Close the current lecture
		close_lecture(prev_lecture);
	}
}

function toggle_lecture(data) {
	// Fade out the previous lecture
	document.getElementById("lecture-" + prev_lecture).classList.remove("lecture-fade-in");
	document.getElementById("lecture-" + prev_lecture).classList.add("lecture-fade-out");

	document.getElementById("lecture-" + prev_lecture).style.opacity = '0';
	document.getElementById("lecture-" + prev_lecture).addEventListener("animationend", set_display_none("lecture-" + prev_lecture));

	// Fade in the active lecture
	document.getElementById("lecture-" + data).classList.remove("lecture-fade-out");
	document.getElementById("lecture-" + data).classList.add("lecture-fade-in");

	document.getElementById("lecture-" + data).style.opacity = "1";
	document.getElementById("lecture-" + data).style.display = "inline-block";

	prev_lecture = data;
}

function close_lecture(data) {
	// Close the lecture
	if(document.getElementById("lecture-" + data).style.opacity == "1") {
		document.getElementById("lecture-" + prev_lecture).classList.remove("lecture-fade-in");
		document.getElementById("lecture-" + prev_lecture).classList.add("lecture-fade-out");

		document.getElementById("lecture-" + data).style.opacity = "0";
	}
}

function set_display_none(data) {
	document.getElementById(data).style.display = "none";
}

function set_opacity_none(data) {
	document.getElementById(data).style.opacity = "0";
}

// Updates the date
function up_date() {
	document.getElementById("date").innerHTML = "It is currently " + new Date()
}

up_date(); // Call it once before the loop starts
var interval = setInterval(up_date, 1000);