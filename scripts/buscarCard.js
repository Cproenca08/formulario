const buscarcpfs = new Api()
const inputPesuqisa = document.querySelector('#inputPesquisa')
const esconderCard = document.querySelectorAll('.criarNovoCard')
const btnPesuisar = document.querySelector('#btnPesquisa')
inputPesuqisa.addEventListener('input', function () {
    if (this.value.length === 0) {
        carregarCards();
    }
});

buscarcpfs.listar(function (listacpfs) {
    btnPesuisar.onclick = function () {
        const cpfPesquisar = inputPesuqisa.value
        const cpfVerificarBusca = listacpfs.some(function (cpfs) {
            const cpfBancoBuscar = cpfs.cpf
            return cpfBancoBuscar === cpfPesquisar
        })
        if (cpfVerificarBusca) {
            const buscarUsuario = listacpfs.find(function (usuario) {
                return usuario.cpf === cpfPesquisar
            })
            const containerDivUsuaioBuscar = document.querySelector('.container-usuarios-cadastrados');
            containerDivUsuaioBuscar.innerHTML = ""
            const criarUsuarioBuscar = document.createElement('div');
            criarUsuarioBuscar.classList.add('.criarNovoCard');
            criarUsuarioBuscar.innerHTML = `            
                    <div class="usuarios-cadastrados" id="criarNovoCard">
                        <div class="card-usuario">
                             <img width="48" height="48" src="https://img.icons8.com/fluency/48/user-male-circle--v1.png"
                                 alt="user-male-circle--v1" />
                            <p>Nome: ${buscarUsuario.nome}</p>
                            <p>CPF: ${buscarUsuario.cpf}</p>
                            <img width="20" height="20"
                                src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/external-edit-basic-user-interface-anggara-flat-anggara-putra.png"
                                alt="external-edit-basic-user-interface-anggara-flat-anggara-putra" class="editarUsuario" data-id="${buscarUsuario.id}"/>
                            <img width="20" height="20" src="https://img.icons8.com/pulsar-gradient/48/filled-trash.png"
                                alt="filled-trash" class="deletarUsuario" data-id="${buscarUsuario.id}"/>
                        </div>
                    </div>`;
            containerDiv.appendChild(criarUsuarioBuscar);
        }
    }
})




