
// document.body.style.backgroundColor = "red";
// find my test button
const testButton = document.getElementById("test-button");
// find out intro modal
const introModal = document.getElementById("intro-modal");
// console.log(introModal);
// find modal close button
const introModalCloseButton = document.getElementById("intro-modal-close");

///////// Modal
// Show modal on page load
// browser loads html > browser loads js > js to open modal > user presses ok on modal > modal closes > audio init
// user can also close modal with escape key
introModal.showModal();
// when ok clicked, close modal
introModalCloseButton.addEventListener("click", function closeIntroModal(){
    // close our modal
    introModal.close();
});


// when dialog closes by whatever means, load audio system
introModal.addEventListener("close", toneInit);


// console.log(introModal);
// console.log("test");
// console.log(1 + 2);


///////// Tone


const synth = new Tone.Synth();

function toneInit(){
    // connect synth to audio output
    synth.connect(Tone.Destination);
}

// do something when we click that button
testButton.addEventListener("click", playTestNote);

function playTestNote(){
synth.triggerAttackRelease("C4", "8n");
}

