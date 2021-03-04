export class Tarefa {
    
    static numero = 0;

    constructor(conteudo, alvo) {
        this._numero = Tarefa.numero;
        this._conteudo = conteudo.value;
        this._alvo = alvo;
    }

    get num(){
        return this._numero;
    }

    template(){
        return `
            ${this._conteudo}
            <button id='removeTaskBtn${this._numero}' class='removeTaskBtn'>
                Remover
            </butto>
        `
    }

    get lista(){
        return this._alvo;
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
        let removeTaskBtn = document.querySelector('#removeTaskBtn'+this._numero);
        
        lista.appendChild(this.criaElemento());
        Tarefa.numero++;
        removeTaskBtn.addEventListener('click', this.remover);
    }
}