document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 65:
      document.getElementById('B').play()
      break
    default:
      console.log('Key not found!')
  }
}
