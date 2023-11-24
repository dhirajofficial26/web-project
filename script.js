let speech = new SpeechSynthesisUtterance();
let voiceselect = document.querySelector("select");


let addVoices = () => {
    let voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    
    voiceselect.innerHTML = ''; 

    voices.forEach((voice, i) => {
        voiceselect.options[i] = new Option(voice.name, i);
    });
};

//it will  Trigger the function to populate voices when voices change
window.speechSynthesis.onvoiceschanged = addVoices;

// Event listener for the change event of the select element
voiceselect.addEventListener("change", () => {
    let voices = window.speechSynthesis.getVoices();
    speech.voice = voices[voiceselect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
