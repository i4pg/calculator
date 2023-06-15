const muteButton = document.getElementById('mute')
const unMuteButton = document.getElementById('unmute')

function muteToggle() {
  unMuteButton.style.display = "flex"
  muteButton.style.display = "none"
  sound = false
}

function unMuteToggle() {
  muteButton.style.display = "flex"
  unMuteButton.style.display = "none"
  sound = true
}

muteButton.addEventListener('click', muteToggle)
unMuteButton.addEventListener('click', unMuteToggle)
