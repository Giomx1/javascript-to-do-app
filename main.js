// Set Item
let firstToDo = {
  toDoText: "Go to gym",
  id: Math.floor(Math.random() * 1)
}

let secondToDo = {
  toDoText: "Study", 
  id: Math.floor(Math.random() * 2)
}

let thirdToDo = {
  toDoText: "Go to work",
  id: Math.floor(Math.random() * 3)
}

const myToDos = [firstToDo, secondToDo, thirdToDo];

//set  
const objectStrings = JSON.stringify(myToDos);
localStorage.setItem('objectStrings', JSON.stringify(objectStrings));  

 

// Retrieve
let retrievedItems = JSON.parse(localStorage.getItem("objectStrings"));
document.getElementById("list").innerHTML = localStorage.getItem("objectStrings");



