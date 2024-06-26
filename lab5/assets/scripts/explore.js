// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const synth = window.speechSynthesis;
    const image = document.querySelector("img");

    // Populates list of voices upon page loading
    synth.addEventListener("voiceschanged", () => {
      const voiceSelect = document.getElementById("voice-select");
      const voices = synth.getVoices();
      for (let i = 0; i < voices.length; i++) {
          const option = document.createElement("option");
          option.textContent = `${voices[i].name} (${voices[i].lang})`;
          option.setAttribute("data-lang", voices[i].lang);
          option.setAttribute("data-name", voices[i].name);
          voiceSelect.appendChild(option);
      }
    });

    const button = document.querySelector("button");
    button.addEventListener("click", function() {
      const voiceSelect = document.getElementById("voice-select");
      const voices = synth.getVoices();
      // Gets the textBox and its contents
      const textBox = document.getElementById("text-to-speak");
      // Creates SpeechSynthesisUtterance object based on textbox input
      const utterance = new SpeechSynthesisUtterance(textBox.value);
      // Gets the selected voice from the selections
      const selectedVoice = voiceSelect.selectedOptions[0].getAttribute("data-name");
      // Finds the selected voice and sets it to the voice in the utterance object
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name == selectedVoice) {
            utterance.voice = voices[i];
            break;
        }
      }
      // Makes the image the smiling-open.png while the synth is speaking
      utterance.addEventListener("start", function() { 
          image.setAttribute("src", "assets/images/smiling-open.png");
      });
      // Set the image back to the smiling.png when the synth finishes
      utterance.addEventListener("end", function() {
        image.setAttribute("src", "assets/images/smiling.png");
      });
      
      // Speaks
      synth.speak(utterance);
    });
}