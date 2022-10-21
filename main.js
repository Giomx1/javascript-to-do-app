let form = document.querySelector('form')
let ul = document.querySelector('ul')
let button = document.querySelector('button')
let input = document.getElementById('item')
let todos = localStorage.getItem('toDoItems') ? JSON.parse(localStorage.getItem('toDoItems')): []



localStorage.setItem('toDoItems', JSON.stringify(todos))
const data = JSON.parse(localStorage.getItem('toDoItems'))

function createLi(userInput) {
  const li = document.createElement('li')
  li.textContent = userInput;
  ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push(input.value)
  localStorage.setItem('toDoItems', JSON.stringify(todos))
  createLi(input.value)
  input.value = "";
})

data.forEach((item) => {
  createLi(item)
})

button.addEventListener('click', function () {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})