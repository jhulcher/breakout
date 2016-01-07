var audioCon = new (window.AudioContext || window.webkitAudioContext)();

function createOscillator (freq) {
  var osc = audioCon.createOscillator();
  osc.type = "square";
  osc.frequency.value = freq;
  osc.detune.value = 0;
  osc.start(audioCon.currentTime);
  return osc;
}

function createGainNode () {
  var gainNode = audioCon.createGain();
  gainNode.gain.value = 0;
  gainNode.connect(audioCon.destination);
  return gainNode;
}

function note (freq) {
  this.oscillatorNode = createOscillator(freq);
  this.gainNode = createGainNode();
  this.oscillatorNode.connect(this.gainNode);
}

note.prototype = {
  start: function () {
    this.gainNode.gain.value = 0.05;
  },
  stop: function () {
    this.gainNode.gain.value = 0;
  }
};

function playNote (freq) {
  var sound = new note(freq);
  sound.start();
  setTimeout(function () {
    sound.stop();
  }, 150);
}

function noteMaker (datum) {
  if (datum === 8) {
    var sound = new note(60);
    sound.start();
    setTimeout(function () {
      sound.stop();
    }, 84);
    setTimeout(function () {
      var sound2 = new note(60);
      sound2.start();
      setTimeout(function () {
        sound2.stop();
      }, 84);
    }, 100);
    setTimeout(function () {
      var sound3 = new note(60);
      sound3.start();
      setTimeout(function () {
        sound3.stop();
      }, 84);
    }, 200);
  } else if (datum === 7) {
    playNote(1050);
  } else if (datum === 6) {
    playNote(530);
  } else if (datum === 5) {
    playNote(300);
  } else if (datum === 4) {
    playNote(370);
  } else if (datum === 3) {
    playNote(410);
  } else if (datum === 2) {
    playNote(450);
  } else if (datum === 1) {
    playNote(490);
  } else if (datum === 0) {
    playNote(530);
  }
}
