
function limpaFormulario(){
    document.getElementById('bairro').value =("")
    document.getElementById('rua').value =("")
}

function attValores(enderecoJSON){
    if (!("erro" in enderecoJSON)) {
    document.getElementById('bairro').value = enderecoJSON.bairro
    document.getElementById('rua').value =enderecoJSON.logradouro
}
}

function pesquisarCep(cepatt){
    if (cepatt != ""){
        var script = document.createElement('script')
        script.src = 'https://viacep.com.br/ws/'+ cepatt + '/json/'
        document.body.appendChild(script);
    }else{
        limpaFormulario();
    }
}

const labelCep = document.querySelector('cepLabel')
labelCep.addEventListener('click', function(){
    pesquisarCep();
    limpaFormulario();
})






const biblioteca = new XMLHttpRequest();
biblioteca.open('GET', 'https://viacep.com.br/ws/78200001/json/')
console.log(biblioteca.responseText)


biblioteca.onreadystatechange = ()=>{
    if(biblioteca.readyState === XMLHttpRequest.DONE){
        let enderecoJSON = JSON.parse(biblioteca.responseText)
        document.getElementById('bairro').value = enderecoJSON.bairro
        document.getElementById('rua').value = enderecoJSON.logradouro
      
    }
    
}
biblioteca.send()