const ususariosCadastradosVoltar = document.querySelector('#abrirSection')
const sectionPrincipalVoltar = document.querySelector('#abrirSectionPrincipal')
const voltar = document.querySelector('#voltarSection')
voltar.onclick = function (){
    ususariosCadastradosVoltar.style.display = "none"
    sectionPrincipalVoltar.style.display = "block"
    const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "info",
                title: "Cadastre um novo usuário",
                customClass: {
                    popup: 'alert-cadastro'
                }

            });
}