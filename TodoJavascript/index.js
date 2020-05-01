//selectors
const todoinput = document.querySelector(".taskInput")
const addInput = document.querySelector(".fa-plus-square")
//Output
const out = document.getElementById("TodoItem")

//event listeners
document.addEventListener("DOMContentLoaded",display);
addInput.addEventListener("click",todoList);
out.addEventListener("click",deletecheck);

//functions

function todoList(){

    event.preventDefault();

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("tododiv")
 
    const newtodo = document.createElement("li")
    newtodo.classList.add("newtodo")
    newtodo.innerText = todoinput.value
    todoDiv.appendChild(newtodo)
    gettodo(todoinput.value);
    
    const tempDiv = document.createElement("div")
    newtodo.appendChild(tempDiv)

    const completeBtn= document.createElement("button")
    completeBtn.classList.add("completeBtn")
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    tempDiv.appendChild(completeBtn)

    const trashBtn= document.createElement("button")
    trashBtn.classList.add("trashbin")
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    tempDiv.appendChild(trashBtn)

    out.appendChild(todoDiv)
    
    todoinput.value="";
}

function deletecheck(e){
    const item = e.target;
    const i =  item.parentElement;

    if (item.classList[0] === "trashbin"){
        const todo = i.parentElement;
        todo.remove();
    }
    if(item.classList[0] === "completeBtn"){
        const todo = i.parentElement;
        todo.classList.toggle("completed");
    }
}

function gettodo(todo){
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function display(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    todos.forEach(function(todo){
    const newtodo = document.createElement("li")
    newtodo.classList.add("newtodo")
    newtodo.innerText = todo
    todoDiv.appendChild(newtodo)
    const tempDiv = document.createElement("div")
    newtodo.appendChild(tempDiv)

    const completeBtn= document.createElement("button")
    completeBtn.classList.add("completeBtn")
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    tempDiv.appendChild(completeBtn)

    const trashBtn= document.createElement("button")
    trashBtn.classList.add("trashbin")
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    tempDiv.appendChild(trashBtn)

    out.appendChild(todoDiv)
    
    todoinput.value="";

    })
}