const track = "./assets/xhacks.ogg";
let spacebar_event_listener = false;
const audioObj = new Audio(track);
audioObj.loop = true;
audioObj.play().catch(() => {
  spacebar_event_listener = true;
  setTimeout(() => {
    alert("Autoplay failed, press spacebar to play");
  }, 1); // alert is now async so it doesn't pause the script
});

document.addEventListener("keyup", (event) => {
  if (event.code === "Space" && spacebar_event_listener == true) {
    console.log("space pressed");
    audioObj.play();
  }
});
