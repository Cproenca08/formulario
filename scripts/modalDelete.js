const deletar = new ArmazenamentoLocal();
const modalDelete = document.querySelector("#abrirModalDelete");
// const btnDeleteUsuario = document.querySelectorAll(".deletarUsuario");
const btnFecharDelete = document.querySelector("#fecharModalDelete");
const btncomfirmarDelete = document.querySelector("#deletarUsuario");
let cpf = null;

document.addEventListener('click', function (event) {
    
    if (event.target.classList.contains('deletarUsuario')) {
        cpf = event.target.dataset.cpf;
        modalDelete.style.display = "block";
    }
});
btnFecharDelete.onclick = function () {
    console.log(cpf);
    modalDelete.style.display = "none";
    cpf = null;
}

if (btncomfirmarDelete) {
        btncomfirmarDelete.addEventListener('click', function () {
            console.log(cpf);
            if(cpf){
                deletar.excluir(cpf);
               
            }

        });
}