import { Tarefa } from './modules/Tarefa.js';

/* 
Comentário: O app é basicamente funcional.
            é possível adicionar e remover tarefas da lista.
            Minha lógica pode ser um pouco confusa mas tentei 
            deixar o mais simples e enxuto que eu pude, com novos
            aprendizados pode ser que eu volte aqui para aplicar.

            Espero que curtam.
*/

const inputTask = document.querySelector(".inputTask");
const inputTaskBtn = document.querySelector(".inputTaskBtn");
const tasks = document.querySelector(".tasks");
inputTaskBtn.onclick = insertTask;

inputTask.addEventListener("keypress", function(e){
    if(e.key == "Enter"){

        //Insere uma nota
        insertTask();
    }
});

function insertTask(){
    if(inputTask.value == ''){
        return;
    }else{
        let tarefa = new Tarefa(inputTask, tasks);
        tarefa.inserir();

        inputTask.value = "";
        inputTask.focus();
    }
}