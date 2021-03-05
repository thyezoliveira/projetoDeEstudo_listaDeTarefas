import { Tarefa } from './modules/Tarefa.js';

/* 
Comentário: O app é basicamente funcional.
            é possível adicionar e remover tarefas da lista.
            Minha lógica pode ser um pouco confusa mas tentei 
            deixar o mais simples e enxuto que eu pude, com novos
            aprendizados pode ser que eu volte aqui para aplicar.

            Espero que curtam.
*/

const inputTask = document.querySelectorAll(".inputTask");
const inputTaskBtn = document.querySelectorAll(".inputTaskBtn");
const tasks = document.querySelector(".tasks");

inputTask.forEach((campo) => {
    inputTaskBtn.forEach((btn) => {
        btn.onclick = insertTask;
    })
    function insertTask(){
        if(campo.value == ''){
            return;
        }else{
            let tarefa = new Tarefa(campo, tasks);
            tarefa.inserir();
    
            campo.value = "";
            campo.focus();
        }
    } 

    campo.addEventListener("keypress", function(e){
        if(e.key == "Enter"){
    
            //Insere uma nota
            insertTask();
        }
    });
})