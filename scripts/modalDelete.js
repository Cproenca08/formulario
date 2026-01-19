const deletar = new Api();
const modalDelete = document.querySelector("#abrirModalDelete");
const btnFecharDelete = document.querySelector("#fecharModalDelete");
const btncomfirmarDelete = document.querySelector("#deletarUsuario");
let idExcluir = null
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('deletarUsuario')) {
        idExcluir = event.target.dataset.id
        // modalDelete.style.display = "block"
        Swal.fire({
            title: "Você tem certeza disso?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#5BBCB8",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, deletar este usuário!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                deletar.deletar(idExcluir);
                Swal.fire({
                    title: "Deletado!",
                    text: "Usuário deletado com sucesso!",
                    icon: "success",
                    confirmButtonColor: '#5BBCB8'
                });
                carregarCards()
            }
        });
    }
})



