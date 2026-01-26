

function pesquisaCep(valor){
    
    const biblioteca = new XMLHttpRequest();
    biblioteca.open('GET', 'https://viacep.com.br/ws/'+valor+'/json/')
    biblioteca.onload = function (){
        if(biblioteca.readyState === XMLHttpRequest.DONE){
            let enderecoJSON = JSON.parse(biblioteca.responseText)
            if(enderecoJSON.erro){
                 alert('cep invalido')
            }else{
                document.getElementById('bairro').value = enderecoJSON.bairro
                document.getElementById('rua').value = enderecoJSON.logradouro
            }
        }else{
            alert('erro conexão api')
        }
    }
    biblioteca.send()
}

function pesquisaCepEditar(valor){
    
    const biblioteca = new XMLHttpRequest();
    biblioteca.open('GET', 'https://viacep.com.br/ws/'+valor+'/json/')
    biblioteca.onload = function (){
        if(biblioteca.readyState === XMLHttpRequest.DONE){
            let enderecoJSON = JSON.parse(biblioteca.responseText)
            if(enderecoJSON.erro){
                 alert('cep invalido')
            }else{
                document.getElementById('bairroEditar').value = enderecoJSON.bairro
                document.getElementById('ruaEditar').value = enderecoJSON.logradouro
            }
        }else{
            alert('erro conexão api')
        }
    }
    biblioteca.send()
}