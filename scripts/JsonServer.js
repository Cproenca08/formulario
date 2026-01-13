class ArmazenamentoLocal {

    key = 'http://localhost:3000/usuarios/'


    salvar(pessoas) {
        const enviar = new XMLHttpRequest();
        enviar.open('POST', this.key, true)
        enviar.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        document.querySelector("#abrirModal").style.display = "block"
        enviar.send(JSON.stringify(pessoas))
    }

    buscar(lista) {
        const enviar = new XMLHttpRequest();
        enviar.open('POST', this.key, true)
        enviar.onload = function (){
            const listaUsuarios = JSON.parse(enviar.responseText);
            lista(listaUsuarios)
        }
        
        enviar.send()
        
    }

    editar() {
        
    }

    excluir(cpf) {
        
        let usuariosCadastrados = this.buscar();
        let usuariosCadastradosNovo = usuariosCadastrados.filter(pessoa => String(pessoa.cpf) !== String(cpf));
        this.salvar(usuariosCadastradosNovo);
       
    }

    filtrar() {

    }

}