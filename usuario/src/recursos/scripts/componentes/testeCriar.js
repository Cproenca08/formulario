

const containerDiv = document.querySelector('.container-usuarios-cadastrados');

async function carregarCards(){
    containerDiv.innerHTML= "";
    const listaPessoas = await api.listar()

    listaPessoas.forEach(pessoa => {    
    const novoCard = document.createElement('div');
    novoCard.classList.add('.criarNovoCard');
    novoCard.innerHTML = `            
    <div class="usuarios-cadastrados" id="criarNovoCard">
                <div class="card-usuario">
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/user-male-circle--v1.png"
                        alt="user-male-circle--v1" />
                    <p>Nome: ${pessoa.NOME}</p>
                    <p>CPF: ${pessoa.CPF}</p>
                    <img width="20" height="20"
                        src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/external-edit-basic-user-interface-anggara-flat-anggara-putra.png"
                        alt="external-edit-basic-user-interface-anggara-flat-anggara-putra" class="editarUsuario" data-id="${pessoa.ID}"/>
                    <img width="20" height="20" src="https://img.icons8.com/pulsar-gradient/48/filled-trash.png"
                        alt="filled-trash" class="deletarUsuario" data-id="${pessoa.ID}"/>
                </div>
            </div>`;
    containerDiv.appendChild(novoCard);    
});

}


