class ArmazenamentoLocal {


    key = 'banco_pessoas'


    salvar(pessoas) {
        localStorage.setItem(this.key, JSON.stringify(pessoas));
    }

    buscar() {
        return JSON.parse(localStorage.getItem(this.key)) || [];
    }

    editar() {

    }

    excluir(pessoas) {
        
        let usuariosCadastrados = this.buscar();
        let usuariosCadastradosNovo = usuariosCadastrados.filter(pessoa => String(pessoa.cpf) !== String(cpf));
        
        this.salvar(usuariosCadastradosNovo);
        localStorage.removeItem(this.key);
    }

    filtrar() {

    }

}