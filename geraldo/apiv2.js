class Apiv2 {


    salvar(pessoa) {
        const biblioteca = new XMLHttpRequest()
        biblioteca.open('POST', 'http://localhost:3000/usuarios')
        biblioteca.setRequestHeader("Content-Type", "application/json")
        biblioteca.send(JSON.stringify(pessoa))
    }

    deletar(id) {
        const biblioteca = new XMLHttpRequest()
        biblioteca.open('DELETE', `http://localhost:3000/usuarios/${id}`)
        biblioteca.send()
    }

    editar(id, pessoa) {
        const biblioteca = new XMLHttpRequest()
        biblioteca.open('PATCH', `http://localhost:3000/usuarios/${id}`)
        biblioteca.setRequestHeader("Content-Type", "application/json")
        biblioteca.send(JSON.stringify(pessoa))
    }
    async buscaPorCpf(cpf) {
        const http = new XMLHttpRequest()
        http.open('GET', 'http://localhost:3000/usuarios')
        http.onload = function () {
            const data = JSON.parse(http.responseText)
            return Promise.resolve(data)
        }
        http.send()
    }

    listar() {
        const biblioteca = new XMLHttpRequest()
        biblioteca.open('GET', 'http://localhost:3000/usuarios')
        let resultado =[]
        biblioteca.onload = function () {
            resultado = JSON.parse(biblioteca.responseText)
        }
        biblioteca.send()
        return resultado
    }

    buscarId(id) {
        const biblioteca = new XMLHttpRequest();
        biblioteca.open('GET', `http://localhost:3000/usuarios/${id}`);
        biblioteca.onload = function () {
            const usuario = JSON.parse(biblioteca.responseText)

        }
        biblioteca.send();
    }

}
