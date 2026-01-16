const deletar = new Api();
const modalDelete = document.querySelector("#abrirModalDelete");
const btnFecharDelete = document.querySelector("#fecharModalDelete");
const btncomfirmarDelete = document.querySelector("#deletarUsuario");
let idExcluir = null
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('deletarUsuario')) {
        idExcluir = event.target.dataset.id
        modalDelete.style.display = "block"
    }
})
btnFecharDelete.onclick = function () {
   
    modalDelete.style.display = "none"
    idExcluir = null
}
if (btncomfirmarDelete) {
    btncomfirmarDelete.addEventListener('click', function () {
       if(idExcluir){
            deletar.deletar(idExcluir); 
            modalDelete.style.display = "none";
            carregarCards()
       } 
    })
}


