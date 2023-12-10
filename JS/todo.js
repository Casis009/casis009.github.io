const toDoForm = document.getElementById("todo-form");
const toDoinput = toDoForm.querySelector("input");
// document.queryselector("#todo-form input")이랑 같음 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];
//newTodo가 그려질대마다 그 텍스트를 array에 push(추가) 하고 싶다.
// localStorag는 배열저장 불가. 스트링만 저장가능

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
//saveTodos를 호출하는 시점에 이미 newtodo가 array에 들어있다.
//JSON.stringify는 자바스크립트 오브젝트나 array또는 어떤 javaScript코득간에
//string으로 만들어 준다. 


function deleteToDo(event){
    const li = event.target.parentElement;
    console.log("Deleting item with ID:", li.id);
    //event.target은 마우스 클릭했을때 반응하는 html -> 여기선 버튼의미
    // parent는 그 요소의 부모. 즉 여기서 li태그가 됨.
    //즉 button의 부모요소인 li태그를 삭제함 (삭제할 대상을 확인함)
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
    console.log("Updated toDos:", toDos);
    
}

// submit의 기본동작은 페이지를 새로고침하는 것이기 때문에 prevent로 기본동작막아줘야함

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="❤️";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

    //append는 마지막에 놓여야 한다

}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoinput.value;
    toDoinput.value="";
    const newTodoObj={
        text: newTodo,
        id: Date.now(),

    };
    toDos.push(newTodoObj);
    //입력했던 값들을 저장하기위해 toDos 배열에 저장해주기
    paintToDo(newTodoObj);
    saveTodos();// 저장

}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(item){

    console.log("this is the turn of",item);

}


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
   toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function sexyFilter(){


}