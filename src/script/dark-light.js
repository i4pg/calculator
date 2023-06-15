const lightBtn = document.getElementById('light')
const darkBtn = document.getElementById('dark')

function darkToggle() {
  lightBtn.style.display = "flex"
  darkBtn.style.display = "none"
  document.body.className = "dark"
}

function lightToggle() {
  console.log()
  darkBtn.style.display = "flex"
  lightBtn.style.display = "none"
  document.body.className = "light"
}

lightBtn.addEventListener('click', lightToggle)
darkBtn.addEventListener('click', darkToggle)
