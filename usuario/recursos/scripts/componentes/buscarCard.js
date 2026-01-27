
import { Api } from "../api/api.js";
const api = new Api();
export async function buscaCards(inputPesuqisa) {
    const buscarCpf = await api.listar()
    
    const buscarUsuario = buscarCpf.find(usuario => usuario.CPF === inputPesuqisa);
    if (buscarUsuario) {
        const containerDivUsuaioBuscar = document.querySelector('.container-usuarios-cadastrados');
        containerDivUsuaioBuscar.innerHTML = ""
        const criarUsuarioBuscar = document.createElement('div');
        criarUsuarioBuscar.classList.add('.criarNovoCard');
        criarUsuarioBuscar.innerHTML = `            
                    <div class="usuarios-cadastrados" id="criarNovoCard">
                        <div class="card-usuario">
                             <img width="48" height="48" src="https://img.icons8.com/fluency/48/user-male-circle--v1.png"
                                 alt="user-male-circle--v1" />
                            <p>Nome: ${buscarUsuario.NOME}</p>
                            <p>CPF: ${buscarUsuario.CPF}</p>
                            <img width="20" height="20"
                                src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/external-edit-basic-user-interface-anggara-flat-anggara-putra.png"
                                alt="external-edit-basic-user-interface-anggara-flat-anggara-putra" class="editarUsuario" data-id="${buscarUsuario.ID}"/>
                            <img width="20" height="20" src="https://img.icons8.com/pulsar-gradient/48/filled-trash.png"
                                alt="filled-trash" class="deletarUsuario" data-id="${buscarUsuario.ID}"/>
                        </div>
                    </div>`;
        containerDivUsuaioBuscar.appendChild(criarUsuarioBuscar);
        return true
    }else{
        return false
    }

}

export function sucessoBusca() {
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
        title: "Usuário encontrado!",
        customClass: {
            popup: 'alert-cadastro'
        }

    });
}
export function falhaBusca() {
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
        icon: "error",
        title: "Usuário não encontrado!",
        customClass: {
            popup: 'alert-cadastro'
        }

    });
}


