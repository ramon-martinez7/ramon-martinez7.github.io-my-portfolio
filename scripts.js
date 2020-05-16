//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-Button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
document.addEventListener("click", addToDo);

//Functions
function addToDo(event) {
  //Prevent form from submitting
  event.preventDefault();
  //Todo DIV
  const todoDIV = document.createElement('div');
  todoDIV.classList.add('todo');
  //Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item');
  todoDIV.appendChild(newTodo);
  //Check Mark Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDIV.appendChild(completedButton);
  //Check Trash Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDIV.appendChild(trashButton)
  //Append to List
  todoList.appendChild(todoDIV);
}