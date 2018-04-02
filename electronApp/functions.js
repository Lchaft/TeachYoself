const SOUNDS = {
  66: new Audio(__dirname + '/Sounds/sounds/B.mp3'),
  65: new Audio(__dirname + '/Sounds/sounds/A.mp3'),
  67: new Audio(__dirname + '/Sounds/sounds/C.mp3'),
  68: new Audio(__dirname + '/Sounds/sounds/D.mp3'),
  69: new Audio(__dirname + '/Sounds/sounds/E.mp3'),
  70: new Audio(__dirname + '/Sounds/sounds/F.mp3'),
  71: new Audio(__dirname + '/Sounds/sounds/G.mp3')
}

document.onkeydown = function(e) {
  let audio = SOUNDS[e.keyCode]
  audio.play()

  //   if (e.keyCode === 66) {
  //     console.log('B')
  //     var audio = new Audio(__dirname + '/Sounds/sounds/B.mp3')
  //     audio.play()
  //   }
  //   switch (e.keyCode) {
  //     case 66:
  //       document.getElementById('B').play()
  //       break
  //     default:
  //       console.log('Key not found!')
  //   }
}

// function prepareButton(buttonEl, soundName) {
//     buttonEl.querySelector('span').style.backgroundImage = 'url("img/icons/' + soundName + '.png")';

//     var audio = new Audio(__dirname + '/wav/' + soundName + '.wav');
//     buttonEl.addEventListener('click', function () {
//         audio.currentTime = 0;
//         audio.play();
//     });
// }
