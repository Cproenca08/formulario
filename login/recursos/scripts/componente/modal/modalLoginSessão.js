export function sessaoSucesso(){
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
            title: "Bem-vindo ao cadastro de usuários!",
            customClass: {
                popup: 'alert-cadastro'
            }

        });
}
export function sessaoFalhaEmailSenha(){
    Swal.fire({
            title: 'Email ou senha incorreto.\n'+
            'TENTE NOVAMENTE!',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#5BBCB8'
        })
}
export function sessaoFalha(){
    return Swal.fire({
            title: 'Você não esta logado.\n'+
            'Faça seu login primeiro!',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#5BBCB8',
            allowOutsideClick: false,
            allowEscapeKey: false
        })
}