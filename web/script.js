var lectnav_enabled = false;

var prev_lecture = "optimization";

var ind = 0;
var story_text = ["Your grandfather's wooden crate factory.", "Well, that's not really an accurate descriptor. It's *your* wooden crate factory, now.",
"You were never really that close to your grandfather, but you understand that this factory really meant a lot to him.", 
"So, although you don't really know much about how any of this works, you're going to try your best to honour his wishes to the fullest.",
"Your grandfather's parting message?", "\"You can toggle the drop-down menu in the top-left corner.\"", "What did he mean by that?", "...", 
"For real though, you'll want to check out that drop-down menu.", "(There's music! Press space.)"]

// Slides out the sidenav
function open_sidenav() {
  document.getElementById("main-sidenav").style.width = "250px";
  document.getElementById("home").style.marginLeft = "250px";
}

// Slides in the sidenav
function close_sidenav() {
  document.getElementById("main-sidenav").style.width = "0";
  document.getElementById("home").style.marginLeft = "0";

  lectnav_enabled = true;
  toggle_lectnav();
}

// Toggles the lecture panel
function toggle_lectnav() {
  // If the lecture panel is not displayed, display it.
  if (!lectnav_enabled) {
    lecture_fade_in("list");

    document.getElementById("lecture").style.width = "100vw";
    document.getElementById("lecture-list").style.opacity = "1";
    lectnav_enabled = true;
  }
  // If the lecture panel is displayed, hide it.
  else if (lectnav_enabled) {
    lecture_fade_out("list");

    document.getElementById("lecture").style.width = "0";
    document
      .getElementById("lecture-list")
      .addEventListener("animationend", set_opacity_none("lecture-list"));

    lectnav_enabled = false;

    // Close the current lecture
    close_lecture(prev_lecture);
  }
}

function toggle_lecture(incoming) {
  // Fade out the previous lecture
  lecture_fade_out(prev_lecture);

  document.getElementById("lecture-" + prev_lecture).style.opacity = "0";
  document
    .getElementById("lecture-" + prev_lecture)
    .addEventListener(
      "animationend",
      set_display_none("lecture-" + prev_lecture)
    );

  // Fade in the active lecture
  lecture_fade_in(incoming);

  document.getElementById("lecture-" + incoming).style.opacity = "1";
  document.getElementById("lecture-" + incoming).style.display = "inline-block";

  prev_lecture = incoming;
}

function close_lecture(data) {
  // Close the lecture
  if (document.getElementById("lecture-" + data).style.opacity == "1") {
    lecture_fade_out(prev_lecture);

    document.getElementById("lecture-" + data).style.opacity = "0";
  }
}

// Handy functions
function set_display_none(elem) {
  document.getElementById(elem).style.display = "none";
}

function set_opacity_none(elem) {
  document.getElementById(elem).style.opacity = "0";
}

function lecture_fade_in(suffix) {
  document
    .getElementById("lecture-" + suffix)
    .classList.remove("lecture-fade-out");
  document.getElementById("lecture-" + suffix).classList.add("lecture-fade-in");
}

function lecture_fade_out(suffix) {

	document.getElementById("lecture-" + suffix).classList.remove("lecture-fade-in");
	document.getElementById("lecture-" + suffix).classList.add("lecture-fade-out");
}

function add_story() {
	if(typeof story_text[ind] === 'undefined') {
	}
	else {
		var new_p = document.createElement("p");
	   	var text = document.createTextNode(story_text[ind]);
	   	new_p.appendChild(text);
	   	var elem = document.getElementById("home-story-sub");
	   	new_p.classList.remove("lecture-fade-out");
		new_p.classList.add("lecture-fade-in");
	   	elem.appendChild(new_p);
	   	ind = ind + 1;
	   	console.log("running");
	}

}

var interval = setInterval(add_story, 3000);

