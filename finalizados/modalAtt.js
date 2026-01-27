

// const modalEditar = document.querySelector("#abrirModalEditar");
// const btnEditarUsuario = document.querySelectorAll(".editarUsuario");
// const btnFecharEditar = document.querySelector("#fecharModalEditar");
// const btnSalvar = document.querySelector("#buttonModalEditar");
// const telefoneAtt = document.querySelector('#telefoneEditar');
// const cpfAtt = document.querySelector('#cpfEditar');
// const nomeAtt = document.querySelector('#nomeEditar');
// const cepAtt = document.querySelector('#cepEditar');
// const emailAtt = document.querySelector('#emailEditar');
// const dataAtt = document.querySelector('#dataEditar');
// const ruaAtt = document.querySelector('#ruaEditar');
// const bairroAtt = document.querySelector('#bairroEditar');
// const numeroAtt = document.querySelector('#numeroEditar');


// let idUsuario = null
// document.addEventListener('click', async function (event) {
//     if (event.target.classList.contains('editarUsuario')) {
//         idUsuario = event.target.dataset.id
        
        

//         // const usuario = await api.buscarId(idUsuario)
//         const dataFormatada = usuario.DATA.split('T')
//         console.log(dataFormatada)
 
//             telefoneAtt.value = usuario.TELEFONE
//             cpfAtt.value = usuario.CPF
//             nomeAtt.value = usuario.NOME
//             cepAtt.value = usuario.CEP
//             emailAtt.value = usuario.EMAIL
//             dataAtt.value = dataFormatada[0]
//             ruaAtt.value = usuario.RUA
//             bairroAtt.value = usuario.BAIRRO
//             numeroAtt.value = usuario.NUMERO
  
//         modalEditar.style.display = "block";
//     }
// });

// if (btnSalvar) {
//     btnSalvar.addEventListener('click', async function (event) {
//         event.preventDefault();
//         const dataFormatada = new Date(dataAtt.value).toISOString().split('T')
//         if (idUsuario) {
//             const pessoas = {
//                 nome: nomeAtt.value,
//                 cpf: cpfAtt.value,
//                 email: emailAtt.value,
//                 data: dataFormatada[0],
//                 telefone: telefoneAtt.value,
//                 rua: ruaAtt.value,
//                 numero: numeroAtt.value,
//                 bairro: bairroAtt.value,
//                 cep: cepAtt.value
//             }
//             await api.editar(idUsuario, pessoas)
            
//             console.log("passei aqui")
//             modalEditar.style.display = "none";
            

//         }await api.listar(idUsuario)
//            await carregarCards()
//     })
  

// }

// btnFecharEditar.onclick = function fecharmodal() {
//     modalEditar.style.display = "none";
//     idUsuario = null
// }



