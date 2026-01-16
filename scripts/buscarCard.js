const buscarcpfs = new Api()
const inputPesuqisa = document.querySelector('#inputPesquisa')
const esconderCard = document.querySelectorAll('.criarNovoCard')
const btnPesuisar = document.querySelector('#btnPesquisa')


buscarcpfs.listar(function (listacpfs){
    btnPesuisar.onclick = function(){
        const cpfPesquisar = inputPesuqisa.value
        const cpfVerificarBusca = listacpfs.some(function(cpfs){
            const cpfBancoBuscar = cpfs.cpf
            return cpfBancoBuscar === cpfPesquisar
        })
        if(cpfVerificarBusca){
            
        }
    
    }
})



