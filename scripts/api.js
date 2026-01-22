
class Api {



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


    async listar() {
        try {
            const response = await axios.get('http://localhost:3000/usuarios');

            return response.data
        } catch (error) {

            notificacao(error,'error')
            console.error(error);
        }
    }

    async buscarId(id) {
        try{
            const response = await axios.get(`http://localhost:3000/usuarios/${id}`)

            return response.data
        }catch(error){
            console.error(error)
        }
    }

}
