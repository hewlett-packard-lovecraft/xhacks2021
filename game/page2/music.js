const track = './media/xhacks.ogg';
let spacebar_event_listener = false;
const audioObj = new Audio(track);
audioObj.play()
  .catch(() => {
    spacebar_event_listener = true;
    alert("Autoplay failed, press spacebar to play");
  });

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    console.log('space pressed');
    audioObj.play();
  }
})
