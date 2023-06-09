const buttons = document.querySelectorAll('.button')
const display = document.getElementById('display')

function displayResult(number) {
  display.textContent = number
}

function browserController(e) {
  const button = e.target.textContent

  if (/\d/.test(button)) {
    displayResult(button)
  } else if (/[AC||C||~||\.]/.test(button)) {
    displayResult(button)
  }

}

Array
  .from(buttons)
  .forEach(_ =>
    addEventListener('click', browserController)
  )
