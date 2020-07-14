
var audio, context, analyser, src, array, logo;

logo = document.getElementById("logo").style;

audio = document.getElementById("audio");




function preparation () {
    context = new AudioContext();
    analyser = context.createAnalyser();
    src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);
    loop();
};



function loop() {
    window.requestAnimationFrame(loop);
    array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);
    
    
    logo.minHeight = (array[200]) + "px";
    logo.width= (array[200]) + "px";
};

window.onclick = function () {
    this.preparation();
    audio.play();
};

