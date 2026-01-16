const salvar = new Api()

const modalEditar = document.querySelector("#abrirModalEditar");
const btnEditarUsuario = document.querySelectorAll(".editarUsuario");
const btnFecharEditar = document.querySelector("#fecharModalEditar");
const btnSalvar = document.querySelector("#buttonModalEditar");
const telefoneAtt = document.querySelector('#telefoneEditar');
const cpfAtt = document.querySelector('#cpfEditar');
const nomeAtt = document.querySelector('#nomeEditar');
const cepAtt = document.querySelector('#cepEditar');
const emailAtt = document.querySelector('#emailEditar');
const dataAtt = document.querySelector('#dataEditar');
const ruaAtt = document.querySelector('#ruaEditar');
const bairroAtt = document.querySelector('#bairroEditar');
const numeroAtt = document.querySelector('#numeroEditar');

let idUsuario = null
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('editarUsuario')) {
        idUsuario = event.target.dataset.id
        salvar.buscarId(idUsuario, function (dadosAtt) {
            telefoneAtt.value = dadosAtt.telefone
            cpfAtt.value = dadosAtt.cpf
            nomeAtt.value = dadosAtt.nome
            cepAtt.value = dadosAtt.cep
            emailAtt.value = dadosAtt.email
            dataAtt.value = dadosAtt.data
            ruaAtt.value = dadosAtt.rua
            bairroAtt.value = dadosAtt.bairro
            numeroAtt.value = dadosAtt.numero
            modalEditar.style.display = "block";
        })
    }
});

if (btnSalvar) {
    btnSalvar.addEventListener('click', function (event) {
        event.preventDefault();
        if (idUsuario) {
            const pessoas = {
                nome: nomeAtt.value,
                cpf: cpfAtt.value,
                email: emailAtt.value,
                data: dataAtt.value,
                telefone: telefoneAtt.value,
                rua: ruaAtt.value,
                numero: numeroAtt.value,
                bairro: bairroAtt.value,
                cep: cepAtt.value
            };
            salvar.editar(idUsuario, pessoas)
            
            console.log("passei aqui")
            modalEditar.style.display = "none";
            

        }salvar.listar(idUsuario)  
            carregarCards()
    })
  

}
btnFecharEditar.onclick = function fecharmodal() {
    modalEditar.style.display = "none";
    idUsuario = null
}



