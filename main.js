let todoInput = document.getElementById('todo-input');
const toDoItemsList = document.getElementById('todo-items');
let addButton = document.getElementById("add-button")
let todos = [];
let button = document.querySelector("input")
let itemList = document.createElement("li");
let deleteButton = document.createElement("button");

button.addEventListener('click', function handleClick(event) {
 let todoInput = document.getElementById('todo-input');
 todoInput.value = "";
});

function addItem(){
  let itemList = document.createElement("li");
  itemList.innerText = todoInput.value;
  toDoItemsList.appendChild(itemList);
  exButton()

  if(todoInput.value === ""){
     toDoItemsList.removeChild(itemList);  
  }
}


 itemList.addEventListener("click", exButton)
  function exButton(){
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    itemList.appendChild(deleteButton)
    itemList.removeEventListener("click", exButton)
    deleteitem()
   
  }

 deleteButton.addEventListener("click", deleteItem)
    function deleteItem(){
      toDoItemsList.removeChild(itemList);
    } 
    

  const makeObject = {
  toDoText: todoInput.value,
  id: Math.floor(Math.random() * 100),
};

todos.push(makeObject);
  
  function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}