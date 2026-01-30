
import { Api } from "../api/api.js";
const api = new Api()
const containerDiv = document.querySelector('.container-usuarios-cadastrados');

export async function carregarCards(){
    containerDiv.innerHTML= "";
    const listaPessoas = await api.listar()

    listaPessoas.forEach(pessoa => {    
    const novoCard = document.createElement('div');
    novoCard.classList.add('criarNovoCard');
    novoCard.innerHTML = `            
    <div class="usuarios-cadastrados" id="criarNovoCard">
                <div class="card-usuario">
                    <img width="56" height="56" src="https://img.icons8.com/pulsar-gradient/48/user-male-circle.png" alt="user-male-circle"/>
                    <p>Nome: ${pessoa.NOME || pessoa.nome} </p>
                    <p>CPF: ${pessoa.CPF || pessoa.cpf}</p>
                    <div class="d-flex">
                    <img width="25" height="25" src="https://img.icons8.com/pulsar-gradient/48/edit.png" alt="edit" class="editarUsuario" data-id="${pessoa.ID || pessoa.id}"/>
                    <img width="25" height="25" src="https://img.icons8.com/pulsar-gradient/48/delete-user-male.png" alt="delete-user-male" class="deletarUsuario" data-id="${pessoa.ID || pessoa.id}"/>
                    </div>                
                    </div>
            </div>`;
    containerDiv.appendChild(novoCard);    
});

}


