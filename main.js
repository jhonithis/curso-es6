class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.isAdmin = false;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);
        this.isAdmin = true;
    }
}

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
            textList += `${index + 1} - ${item.email} - ${item.senha} - ${item.isAdmin} <br />`
        });
        document.getElementById('list').innerHTML = textList;    
    }
}

class TodoList extends List {
    constructor(){
        super();
        document.getElementById('novo').onclick = function(){

            const elementInputIsAdmin = document.getElementById('isAdmin');
            let email = document.getElementById('email').value;
            let senha = document.getElementById('senha').value;
            
            let usuario;
            if(elementInputIsAdmin.checked){
                usuario = new Admin(email, senha);
            } else {
                usuario = new Usuario(email, senha);
            }
            MinhaLista.add(usuario);
            MinhaLista.listData();
        }
        
        document.getElementById('email').onclick = function(element){
            element.toElement.value = "";
            const elementInput = document.getElementById('senha');
            elementInput.value = "";
        }
    }

    
}

var MinhaLista = new TodoList();