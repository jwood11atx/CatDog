
export default class Loader {
  constructor(actx) {
    this.imgs = {};
    this.sounds = {};
    this.fonts = {};
    this.actx = actx;
  }

  progressBar() {

  }
// var initialize = _.once(createApplication);
  loadImages(images) {
    return images.map( image => {
      this.loadImage(image.label, image.src);
    });
  }

  loadImage(key, src) {
    var img = new Image();

    var d = new Promise(function (resolve, reject) {
        img.onload = function () {
            this.imgs[key] = img;
            resolve(img);
        }.bind(this);

        img.onerror = function () {
            reject('image failed to load: ' + src);
        };
    }.bind(this));

    img.src = src;
    return d;
  }

  getImage(key) {
    return (key in this.imgs) ? this.imgs[key] : null;
  }

  loadSounds(sounds) {
    return sounds.map( sound => {
      this.loadSound(sound.label, sound.src);
    });
  }


  loadSound(key, src) {
    var self = this;
    var done = new Promise(function(resolve, reject) {

      // var actx = new (window.AudioContext || window.webkitAudioContext)();
      var soundBuffer;
      var request = new XMLHttpRequest();
      request.open("GET", src, true);
      // request.open("GET", "../audio/loading-loop-0.wav", true);
      request.responseType = 'arraybuffer';
      request.send();

      function loadHandler(e) {
        self.actx.decodeAudioData(request.response,
          buffer => {
            soundBuffer = buffer;
            // let soundNode = actx.createBufferSource();
            // soundNode.buffer = soundBuffer;
            // soundNode.connect(actx.destination);
            self.sounds[key] = soundBuffer;
            resolve(request.response);
          },
          error => { throw new Error("audio failed to load: " + error); });
      }

      request.addEventListener('load', loadHandler, false);

    });

    return done;
  }


   loadMusic() {
    var actx = new (window.AudioContext || window.webkitAudioContext)();
    var soundBuffer;
    var request = new XMLHttpRequest();
    request.open("GET", "../audio/tle-extended.mp3", true);
    // request.open("GET", "../audio/loading-loop-0.wav", true);
    request.responseType = 'arraybuffer';
    request.send();

    function loadHandler(e) {
      console.log('audio-loadHandler');
      actx.decodeAudioData(request.response,
        buffer => {
          soundBuffer = buffer;
          let soundNode = actx.createBufferSource();
          soundNode.buffer = soundBuffer;
          soundNode.connect(actx.destination);
          soundNode.loop = true;
          soundNode.start(0);
        },
        error => { throw new Error("audio failed to load: " + error); });
      };
      request.addEventListener('load', loadHandler, false);

    }


}
