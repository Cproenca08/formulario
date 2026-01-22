

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
document.addEventListener('click', async function (event) {
    if (event.target.classList.contains('editarUsuario')) {
        idUsuario = event.target.dataset.id
      


        const usuario = await api.buscarId(idUsuario)
        console.log(usuario)
     telefoneAtt.value = usuario.TELEFONE
            cpfAtt.value = usuario.CPF
            nomeAtt.value = usuario.NOME
            cepAtt.value = usuario.CEP
            emailAtt.value = usuario.EMAIL
            dataAtt.value = usuario.DATA
            ruaAtt.value = usuario.RUA
            bairroAtt.value = usuario.BAIRRO
            numeroAtt.value = usuario.NUMERO
  
        modalEditar.style.display = "block";
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
            api.editar(idUsuario, pessoas)
            
            console.log("passei aqui")
            modalEditar.style.display = "none";
            

        }api.listar(idUsuario)
        const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Dados do usuário atualizados com sucesso!",
                customClass: {
                    popup: 'alert-cadastro'
                }

            });  
            carregarCards()
    })
  

}

btnFecharEditar.onclick = function fecharmodal() {
    modalEditar.style.display = "none";
    idUsuario = null
}



