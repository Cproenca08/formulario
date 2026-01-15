class Api{


    salvar(pessoa){
        const biblioteca = new XMLHttpRequest()
        biblioteca.open('POST', 'http://localhost:3000/usuarios')
        biblioteca.setRequestHeader("Content-Type", "application/json")
        biblioteca.send(JSON.stringify(pessoa))
    }

    deletar(id){
        const biblioteca = new XMLHttpRequest()
        biblioteca.open('DELETE', 'http://localhost:3000/usuarios/'+id+'')
        
        biblioteca.send()
    }

    editar(id, pessoa){
        const biblioteca = new XMLHttpRequest()
        biblioteca.open('PATCH', 'http://localhost:3000/usuarios/'+id+'')
        biblioteca.setRequestHeader("Content-Type", "application/json")
        biblioteca.send(JSON.stringify(pessoa))
    }


    listar(usuarios){
        const biblioteca = new XMLHttpRequest()
        biblioteca.open('GET', 'http://localhost:3000/usuarios')
        biblioteca.onload = function(){
        const lista =  JSON.parse(biblioteca.responseText)
        usuarios(lista)
        
        }
        biblioteca.send()
    }
    buscarId(id, idEncontrado) {
        const biblioteca = new XMLHttpRequest();
        biblioteca.open('GET', 'http://localhost:3000/usuarios/'+id+'');
        biblioteca.onload = function() {
        const usuario = JSON.parse(biblioteca.responseText)
        idEncontrado(usuario)  
        }
        biblioteca.send();
    }
}
