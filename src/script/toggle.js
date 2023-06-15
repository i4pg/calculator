const lightBtn = document.getElementById('light')
const darkBtn = document.getElementById('dark')
const muteButton = document.getElementById('mute')
const unMuteButton = document.getElementById('unmute')
const settingsButton = document.getElementById('settings')
const settingsMenu = document.getElementsByTagName('aside')[0]

function muteToggle() {
  unMuteButton.style.display = "flex"
  muteButton.style.display = "none"
  sound = false
}

function unMuteToggle() {
  muteButton.style.display = "flex"
  unMuteButton.style.display = "none"
  sound = true
  playSound()
}

function darkToggle() {
  lightBtn.style.display = "flex"
  darkBtn.style.display = "none"
  document.body.className = "dark"
  playSound()
}

function lightToggle() {
  darkBtn.style.display = "flex"
  lightBtn.style.display = "none"
  document.body.className = "light"
  playSound()
}

function toggleSettings() {
  settingsMenu.style.display
    = settingsMenu.style.display === "flex"
      ? "none" : "flex"
}

lightBtn.addEventListener('click', lightToggle)
darkBtn.addEventListener('click', darkToggle)
muteButton.addEventListener('click', muteToggle)
unMuteButton.addEventListener('click', unMuteToggle)
settingsButton.addEventListener('click', toggleSettings)
settingsMenu.addEventListener('mouseleave', toggleSettings)
