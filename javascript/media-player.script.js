// (() => {
// execute in own scope (no variable name collisions, use in production, not development)

class Epi {
    constructor() {
        this.audioSettings = {
            volume: 100,
            localSource: null
        }
    }
}

const buttons = {
    prevSong: document.querySelectorAll("button.media-control-btn")[0],
    prev10s: document.querySelectorAll("button.media-control-btn")[1],
    next10s: document.querySelectorAll("button.media-control-btn")[2],
    nextSong: document.querySelectorAll("button.media-control-btn")[3],
}

const audioTrack = document.getElementById("audio_progress");
const audioProgressVisual = document.querySelector("div#audio_progress span");
let progress = 1;

function updateProgressVisual() {
    audioProgressVisual.style.width = `${progress}%`;
}


let x;
const anim = function () {
    updateProgressVisual();
    if (progress > 100) {
        clearInterval(x)
    }
    console.log(progress);
    progress++;
}

x = setInterval(anim, 200);

//})() 