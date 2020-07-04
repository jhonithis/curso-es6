class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data.join(", "));
    }
}

class TodoList extends List {
    constructor(){
        super();
        document.getElementById('novotodo').onclick = function(){
            const elementInput = document.getElementById('texttodo')
            MinhaLista.add(elementInput.value);
        }
        
        document.getElementById('texttodo').onclick = function(){
            const elementInput = document.getElementById('texttodo')
            elementInput.value = "";
        }
    }
}

var MinhaLista = new TodoList();
