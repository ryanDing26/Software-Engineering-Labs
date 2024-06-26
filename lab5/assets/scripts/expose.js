// expose.js

window.addEventListener('DOMContentLoaded', init);
const confetti = new JSConfetti();

function init() {
  // Store audio tag content and set default volume and sound image
  const sound = document.querySelector("audio");
  const image = document.querySelector("img");

  // Change the image and audio when a different option is selected
  const option = document.getElementById("horn-select");
  option.addEventListener("change", function() {
    const audio = document.querySelector("audio");
    image.setAttribute("src", "assets/images/" + this.value + ".svg");
    audio.setAttribute("src", "assets/audio/" + this.value + ".mp3");
  });

  // Plays the sound upon clicking the button
  const button = document.querySelector("button");
  button.addEventListener("click", function() {
    sound.play();
    if (image.getAttribute("src") == "assets/images/party-horn.svg") {
      confetti.addConfetti();
    }
  });

  // Changes the volume according to the slider
  const slider = document.getElementById("volume");
  slider.addEventListener("change", function() {
    sound.volume = this.value / 100;
    const soundIcon = this.nextElementSibling;
    let level = -1;
    if (sound.volume == 0) {
      level = 0;
    } else if (sound.volume >= .67) {
      level = 3;
    } else if (sound.volume >= .33) {
      level = 2;
    } else {
      level = 1;
    }
    soundIcon.setAttribute("src", "assets/icons/volume-level-" + level + ".svg");
  });
}