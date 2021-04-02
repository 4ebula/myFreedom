function Guitar (plugged = false) {
  this.brand;
  this.model;
  this.volumeKnob = 0;
  this.volume = 10;
  this.plugged = plugged;
  this.tune = {
    1: 'E4',
    2: 'H3',
    3: 'G3',
    4: 'D3',
    5: 'A2',
    6: 'E2',
  };
  
  this.pickup;
  this.soundBoard;

  this.tuneSet = ['A4', 440, Math.pow(2, 1/12)];
  this.steps = ['C', 'Cis', 'D', 'Dis', 'E', 'F', 'Fis', 'G', 'Gis', 'A', 'B', 'H'];

  this.calculateFrequency = function (note) {
    let curOctave = 440 * Math.pow(2, +note.slice(-1) - 4);
    let root = curOctave * Math.pow(this.tuneSet[2], -9);
    let semistep = this.steps.findIndex(e => e === note.slice(0, -1));
    return root * Math.pow(this.tuneSet[2], semistep);
  };

  this.tuneUp = function () {
    for (let key in this.tune) {
      this.tune[key] = this.calculateFrequency(this.tune[key]);
    }
  };
  this.tuneUp();

  this.setVolume = function () {
    if (this.volumeKnob === 0) this.volume = 10;
    else if(plugged) this.volume = 100 * Math.log10 (this.volumeKnob);
  };
  this.setVolume();

  this.playNote = function (string, fret) {
    return this.tune[string] * Math.pow(this.tuneSet[2], fret);
  };
}

const thisGuitar = new Guitar();