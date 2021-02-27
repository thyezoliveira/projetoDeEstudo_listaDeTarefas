/* 
Comentário: O app é basicamente funcional.
            é possível adicionar e remover tarefas da lista.
            Minha lógica pode ser um pouco confusa mas irei comentar e
            retrabalhar para deixar mais simples possivel.
*/

// Seleção do campo de texto
const inputTask = document.querySelector(".inputTask");

//Seleção do botão de inserir nota
const inputTaskBtn = document.querySelector(".inputTaskBtn");

//Seleção da lista (ul) de notas
const tasks = document.querySelector(".tasks");

// Numero da nota
let taskNumber = 0;

//Ao clicar no botão, inserir nota na lista de notas
inputTaskBtn.onclick = insertTask;

//Insere um listener no campo input para que quando o teclado for usado chamar a função abaixo
inputTask.addEventListener("keypress", insertTaskWithEnter);

// Função de inserir nota
function insertTask(){

    // Cria o elemento "list item" que irá representar a tarefa
    let li = document.createElement("li");

    //Cria o botão que remove essa tarefa
    let delBtn = document.createElement("button");

    //Acrescenta um texto dentro da tag li, e o texto foi recebido pela função "receiveText()"
    li.innerHTML = `<p>${receiveText()}</p>`;

    //Adiciona a classe "task" na tag li da tarefa
    li.classList.add("task");

    //Adiciona um ID a tag li e define o valor dela para "task" mais o numero da nota
    li.setAttribute("id", "task" + taskNumber);

    //Acrescenta um texto no botão que remove a nota
    delBtn.appendChild(document.createTextNode(" Remover "));

    //Define o ID do botão de remover nota como a string abaixo mais o numero da tarefa
    delBtn.setAttribute("id", "removeTaskBtn" + taskNumber);

    //Adiciona uma classe no botão.
    delBtn.classList.add("removeTaskBtn");

    //Adiciona o botão no list item
    li.appendChild(delBtn);

    //Adiciona o list item que é nossa tarefa em "tasks" que é a ul que lista todas as tarefas
    tasks.appendChild(li);

    //Aciona a função indicada a baixo usando como parametro o o numero da tarefa
    activateRemoveEvent(taskNumber);

    //Aumenta a variavel que conta o numero de tarefas
    taskNumber++;

    //Apaga o campo input
    inputTask.value = "";

    //Ativa o foco do campo input
    inputTask.focus();
}

//Função que recebe o texto do campo input
function receiveText(){

    //Criar uma variavel que recebe como valor, o valor do campo input
    let textValue = inputTask.value;

    //Retorna o valor da variavel como uma string para uso externo
    return textValue;

}

// Função que remove a tarefa da lista de tarefas
function removeTask(event){

    //Pega o ID do botão e poe ele na variavel
    let btnX = event.target.id;

    //Pega o ID do nó pai do botao de remover. Que é a própria nota.
    let xParent = event.path[1].id;

    //Pega o ultimo dígito do ID do botão. Que é o numero da nota.
    let indexBtnX = btnX.charAt(btnX.length - 1);

    //Pega o ultimo dígito do ID da nota. Que tambem é o numero da nota.
    let indexXParent = xParent.charAt(xParent.length - 1);

    //Marca o elemento pai do botao. Ou seja a nota, o list item.
    let item = event.target.parentElement;
    
    //Se o numero que consta no id do botao for identico ao do id da nota.
    if(indexBtnX == indexXParent){

        //Pega a ul que é a nossa lista de tarefas e joga em uma variavel
        let element = event.path[2];

        //Remove a tarefa da lista
        element.removeChild(item);

    }
}

//Função que ativa o evento de remover notas no botão criado dentro da tarefa
function activateRemoveEvent(n){

    //Pega o botao de remover que está dentro do list item da tarefa
    let removeTaskBtn = document.querySelector("#removeTaskBtn" + n);

    //Acrescenta um listener de clique nele apontando para a função de remover tarefa
    removeTaskBtn.addEventListener("click", removeTask);

}

//Função que insere uma nota ao apertar enter
function insertTaskWithEnter(e){

    //Se a tecla apertada for a tecla Enter
    if(e.key == "Enter"){

        //Insere uma nota
        insertTask();
    }
}