

function pesquisaCep(valor){
    console.log("valor redebido", valor)
    const biblioteca = new XMLHttpRequest();
    biblioteca.open('GET', 'https://viacep.com.br/ws/'+valor+'/json/')
    biblioteca.onload = function (){
        if(biblioteca.readyState === XMLHttpRequest.DONE){
            console.log('teste;',biblioteca.responseText)
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

