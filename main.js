class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data.join(", "));
    }

    listData(){
        let textList = '';
        this.data.map(function(item, index){
            textList += (index + 1) + " - " + item + "<br />"
        });
        document.getElementById('listtodo').innerHTML = textList;    
    }
}

class TodoList extends List {
    constructor(){
        super();
        document.getElementById('novotodo').onclick = function(){
            const elementInput = document.getElementById('texttodo')
            MinhaLista.add(elementInput.value);
            MinhaLista.listData();
        }
        
        document.getElementById('texttodo').onclick = function(){
            const elementInput = document.getElementById('texttodo')
            elementInput.value = "";
        }
    }

    
}
var MinhaLista = new TodoList();