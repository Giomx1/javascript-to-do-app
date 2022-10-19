const todoInput = document.getElementById('todo-input');
const toDoItemsList = document.getElementById('todo-items');
let addButton = document.getElementById("add-button")
let todos = [];

addButton.addEventListener("click", addItem);
function addItem(){
  let itemList = document.createElement("LI");
  itemList.innerText = todoInput.value;
  toDoItemsList.appendChild(itemList);
  
  
  itemList.addEventListener("click", exButton)
  function exButton(){
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    itemList.appendChild(deleteButton)
    itemList.removeEventListener("click", exButton)
    
    
    deleteButton.addEventListener("click", deleteItem)
    function deleteItem(){
      toDoItemsList.removeChild(itemList);
    }
  }
}

const makeObject = {
  toDoText: todoInput.value,
  id: Math.floor(Math.random() * 100),
};
todos.push(makeObject);

function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

/*
-Save each todo item as an object, with a key for the todo text and an "id" key 
that represents a random number you can use to search it by. 
So, you should have an array of objects that you're saving in localStorage.
-Hint: use JavaScript localStorage to store the todos. 
-Hint: To convert an array into the string representation, 
you'll need JSON stringify. To convert it back to an array, you'll need JSON parse.
-Send me the project for review and get started on the next project.
*/




// function to add todos to local storage
//function addToLocalStorage(todos) {
  //localStorage.setItem('todos', JSON.stringify(todos));
//}



//save to localstorage
//when user refreshes we have to check if anything is on the local storage and display it on ui.