const toDoForm = document.getElementById('todo-form')
const toDoInput = document.querySelector('#todo-form input')
const toDoList = document.getElementById("todo-list")

let toDos = [ ]


function saveToDos(){
    // console.log(toDos)
    localStorage.setItem("todos",JSON.stringify(toDos))
}

function deleteToDo(e){
    const li = e.target.parentElement
    li.remove()
}

function paintToDo(newToDo){
    const li = document.createElement("li")
    li.innerText = newToDo;
    toDoList.appendChild(li)

    const button = document.createElement('button')
    button.innerHTML = "삭제"
    li.appendChild(button)
    
    button.addEventListener('click',deleteToDo)   

}

function handleToDoSubmit(event){
    event.preventDefault();
    // console.log(toDoInput.value)
    const newToDo = toDoInput.value
    toDoInput.value = "";
    // 그려주는 함수 
    paintToDo(newToDo)
    // 로컬 스토리지에 저장
    toDos.push(newToDo)
    saveToDos()

}

toDoForm.addEventListener('submit',handleToDoSubmit);

const savedToDos = localStorage.getItem('todos')

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos;
    toDos.forEach(paintToDo)
}