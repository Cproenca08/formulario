export async function modalDeletar() {
    const result = await Swal.fire({
        title: "Você tem certeza disso?",
        text: "Você não poderá reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#5BBCB8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, deletar este usuário!",
        cancelButtonText: "Cancelar"
    });

    
    return result.isConfirmed; 
}
export function modalDeletarSucesso() {
    Swal.fire({
        title: "DELETADO!",
        text: "Usuário deletado com sucesso!",
        icon: "success",
        confirmButtonColor: '#5BBCB8'
    });
}