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
        
        
        localStorage.removeItem(cpf);
        
       
    }

    filtrar() {

    }

}