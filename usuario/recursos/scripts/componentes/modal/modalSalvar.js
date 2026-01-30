export function modalSalvar(status) {
    console.log(status)
    console.log(status)
    if (status === 400) {
        Swal.fire({
            title: 'Já existe um usuario com esse CPF!',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#5BBCB8'
        })
    } else if (status === 201) {
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
            title: "Usuário cadastrado com sucesso!",
            customClass: {
                popup: 'alert-cadastro'
            }

        });
    }
}
const ususariosCadastradosVoltar = document.querySelector('#abrirSection')
const sectionPrincipalVoltar = document.querySelector('#abrirSectionPrincipal')
export function voltar(){
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

