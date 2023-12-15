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
    toDos = toDos.filter((item) => item.id !== parseInt(li.id))
    saveToDos()
}

function paintToDo(newToDo){
    const li = document.createElement("li")
    li.setAttribute("id", newToDo.id)
    li.innerText = newToDo.text;
    toDoList.appendChild(li)

    const button = document.createElement('button')
    button.innerHTML = "삭제"
    li.appendChild(button)
    
    button.addEventListener('click',deleteToDo)   

}

function handleToDoSubmit(event){
    event.preventDefault();
    // console.log(toDoInput.value)
    const newToDoObj = {
        text: toDoInput.value,
        id: Date.now()
    }
    toDoInput.value = "";
    // 그려주는 함수 
    paintToDo(newToDoObj)
    // 로컬 스토리지에 저장
    toDos.push(newToDoObj)
    saveToDos()
// ㅎㅎ
}

toDoForm.addEventListener('submit',handleToDoSubmit);

const savedToDos = localStorage.getItem('todos')

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos;
    toDos.forEach(paintToDo)
}
