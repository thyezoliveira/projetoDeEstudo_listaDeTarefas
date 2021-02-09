/* 
Comentário: O app é basicamente funcional.
            é possível adicionar e remover tarefas da lista.
            Minha lógica pode ser um pouco confusa mas irei comentar e
            retrabalhar para deixar mais simples possivel.

            E isso conclui meu primeiro projeto de treino de JS.
*/


const inputTask = document.querySelector(".inputTask");
const inputTaskBtn = document.querySelector(".inputTaskBtn");
const tasks = document.querySelector(".tasks");
let taskNumber = 0;

inputTaskBtn.onclick = insertTask;
inputTask.addEventListener("keypress", insertTaskWithEnter);

function insertTask(){
    let li = document.createElement("li"); // Cria
    let delBtn = document.createElement("button");

    li.appendChild(document.createTextNode(receiveText()));
    li.setAttribute("id", "task" + taskNumber);
    delBtn.appendChild(document.createTextNode(" X "));
    delBtn.setAttribute("class", "removeTaskBtn" + taskNumber);
    li.appendChild(delBtn);

    tasks.appendChild(li);

    activateRemoveEvent(taskNumber);
    taskNumber++;

    inputTask.value = "";
    inputTask.focus();
}

function receiveText(){
    return inputTask.value;
}

function removeTask(event){
    let btnX = event.target.className;
    let xParent = event.path[1].id;
    let indexBtnX = btnX.charAt(btnX.length - 1);
    let indexXParent = xParent.charAt(xParent.length - 1);
    let item = event.target.parentElement;

    if(indexBtnX == indexXParent){
        let element = event.path[2];
        element.removeChild(item);
    }
}

function activateRemoveEvent(n){
    let removeTaskBtn = document.querySelector(".removeTaskBtn" + n);
    removeTaskBtn.addEventListener("click", removeTask);
}

function insertTaskWithEnter(e){
    if(e.key == "Enter"){
        insertTask();
    }
}