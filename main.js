/*
To help you update the logic, 
  when a user adds a new todo, 
  the "addItem" function should:
1. create the "makeObject"
2. add the object to your todos array
3. Call the "addToLocalStorage" 
to the todos are saved in localStorage.

Second thing to do is to create a "loadTodos" 
function, that checks if todos exist 
in localStorage, and if they do, 
to assign that array to your "todos" variable. 
No need for an "else".
Call that function to make sure it runs.

With these two, 
you should be able to 
add a todo to localStorage now.

Once you have that down, 
update your "loadTodos" function 
to have a "for loop" that loops through 
the array of todos, and displays them on the UI.
*/
let todoInput = document.getElementById('todo-input');
const toDoItemsList = document.getElementById('todo-items');
let addButton = document.getElementById("add-button")
let todos = [];
let button = document.querySelector("input")
let itemList = document.createElement("li");
let deleteButton = document.createElement("button");

button.addEventListener('click', function() {
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
addButton.addEventListener("click", addItem)


 itemList.addEventListener("click", exButton)
  function exButton(){
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    itemList.appendChild(deleteButton)
    itemList.removeEventListener("click", exButton)
    deleteButton.addEventListener("click", deleteItem)
   
  }


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
function loadToDos(){
  for (let i = 0; i < todos.length; i++) {
      
  }
}
