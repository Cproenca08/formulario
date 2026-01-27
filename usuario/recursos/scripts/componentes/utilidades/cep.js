
export async function pesquisaCep(valor) {
 try {
        const response = await axios.get(`https://viacep.com.br/ws/${valor}/json/`)

        let enderecoJSON = response.data
        if (enderecoJSON.erro) {
            Swal.fire({
                icon: "error",
                title: "CEP não encontrado!",
                timer: 2000,
                showConfirmButton: false
            });
        } else {
            document.getElementById('bairro').value = enderecoJSON.bairro
            document.getElementById('rua').value = enderecoJSON.logradouro
            document.getElementById('cidade').value = enderecoJSON.localidade
            document.getElementById('uf').value = enderecoJSON.uf
        }
    } catch {
        console.error(error);
        Swal.fire({
            icon: "error",
            title: "Erro de conexão",
            text: "Não foi possível buscar o CEP."
        });
    }
}

export async function pesquisaCepEditar(valor) {
    console.log(valor)
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${valor}/json/`)

        let enderecoJSON = response.data
        if (enderecoJSON.erro) {
            Swal.fire({
                icon: "error",
                title: "CEP não encontrado!",
                timer: 2000,
                showConfirmButton: false
            });
        } else {
            document.getElementById('bairroEditar').value = enderecoJSON.bairro
            document.getElementById('ruaEditar').value = enderecoJSON.logradouro
             document.getElementById('cidadeEditar').value = enderecoJSON.localidade
            document.getElementById('ufEditar').value = enderecoJSON.uf
        }
    } catch {
        console.error(error);
        Swal.fire({
            icon: "error",
            title: "Erro de conexão",
            text: "Não foi possível buscar o CEP."
        });
    }
}
