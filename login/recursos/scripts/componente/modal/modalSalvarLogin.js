export function modalSalvarLogin(status) {
    console.log(status)
    console.log(status)
    if (status === 400) {
        Swal.fire({
            title: 'Já existe um usuario com esse EMAIL!',
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
            title: "Usuário cadastrado com sucesso, volte a pagina de login!",
            customClass: {
                popup: 'alert-cadastro'
            }

        });
    }
}