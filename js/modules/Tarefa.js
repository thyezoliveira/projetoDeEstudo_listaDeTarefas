export class Tarefa {
    
    static numero = 0;

    constructor(conteudo, alvo) {
        this._numero = Tarefa.numero;
        this._conteudo = conteudo.value;
        this._alvo = alvo;
    }

    get lista(){
        return this._alvo;
    }

    template(){
        return `
            ${this._conteudo}
            <button id='removeTaskBtn${this._numero}' class='removeTaskBtn'>
                Remover
            </butto>
        `
    }

    criaElemento(){
        let li = document.createElement('li');
        li.setAttribute('id', 'task'+this._numero);
        li.classList.add('task');
        li.innerHTML = this.template();
        return li;
    }

    inserir(){
        let lista = this.lista;
        lista.appendChild(this.criaElemento());
        Tarefa.numero++;
        let removeTaskBtn = document.getElementById('removeTaskBtn'+this._numero);
        removeTaskBtn.addEventListener('click', this.remover);
    }

    remover(event){
        let task = event.path[1];
        let taskId = task.id;
        let btnId = event.target.id;
        let taskIdLastChar = taskId.charAt(taskId.length - 1);
        let btnIdLastChar = btnId.charAt(btnId.length - 1);
        let lista = event.path[2];

        if(taskIdLastChar == btnIdLastChar) {
            lista.removeChild(task);
            console.log(taskId+' Ok!');
        }

    }
}