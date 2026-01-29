import { Api } from "./api/api.js";
import { modalDeletar, modalDeletarSucesso } from "./componentes/modal/modalDeletar.js";
import { carregarCards } from "./componentes/testeCriar.js"
import { abrirModal, fecharModal, dadosBanco, salvarDados } from "./componentes/modal/modalEditar.js";
import { sucessoBusca, falhaBusca, buscaCards } from "./componentes/buscarCard.js";
import { voltar } from "./componentes/modal/modalSalvar.js";
import { formatacaoInput } from "./componentes/utilidades/formatacaoInput.js"
import { pesquisaCep } from "./componentes/utilidades/cep.js"
import { sessaoSucesso, sessaoFalha } from '../../../login/recursos/scripts/componente/modal/modalLoginSessão.js'
import { carregarXML } from './componentes/utilidades/imagemXML.js'
carregarXML()
formatacaoInput()


async function verificarAcesso() {
    const sessaoSalva = localStorage.getItem('token');
    if (sessaoSalva) {
        const nomeSalvo = localStorage.getItem('nome')
        console.log(nomeSalvo)
        const indexNome = document.getElementById('nomeUsuario')
        indexNome.innerText = nomeSalvo
        sessaoSucesso() 
    } else {
        await sessaoFalha()
        window.location.href = "../../../login/login.html";
        return;
    }
    console.log(`Usuário logado`);

}
const botaSair = document.querySelector('#buttonSair')
botaSair.addEventListener('click', function () {
    localStorage.removeItem('token')
    localStorage.removeItem('nome')
    window.location.href = "../../../login/login.html";
})


verificarAcesso();
// cadastrar
const api = new Api();
const telefone = document.querySelector('#telefone');
const cpf = document.querySelector('#cpf');
const nome = document.querySelector('#nome');
const cep = document.querySelector('#cep');
const email = document.querySelector('#email');
const data = document.querySelector('#data');
const rua = document.querySelector('#rua');
const bairro = document.querySelector('#bairro');
const numero = document.querySelector('#numero');
const cidade = document.querySelector('#cidade');
const uf = document.querySelector('#uf');
const formulario = document.querySelector('form');
if (cep) {
    cep.addEventListener('blur', function () {
        const cepPesquisa = this.value
        if (cepPesquisa.length === 8) {
            pesquisaCep(cepPesquisa);
        }
    });
}

formulario.addEventListener('submit', async function (evento) {
    evento.preventDefault();

    const listaPessoas = await api.listar()
    console.log(listaPessoas)
    await api.salvar({
        telefone: telefone.value,
        cpf: cpf.value,
        nome: nome.value,
        cep: cep.value,
        email: email.value,
        data: data.value,
        rua: rua.value,
        bairro: bairro.value,
        numero: numero.value,
        cidade: cidade.value,
        uf: uf.value
    })
    formulario.reset();

});

// voltar section
const voltarSection = document.querySelector('#voltarSection')
voltarSection.addEventListener('click', function () {
    voltar()
})

// abrir aba usuarios cadastrados
const abrirSection = document.querySelector('#buttonAbrirSection');

if (abrirSection) {
    abrirSection.addEventListener('click', () => {
        document.querySelector('#abrirSection').style.display = "block";
        document.querySelector('#abrirSectionPrincipal').style.display = "none";
        carregarCards();
    });
}

// editar

let idUsuario = null
document.addEventListener('click', async function (event) {

    if (event.target.classList.contains('editarUsuario')) {
        idUsuario = event.target.dataset.id
        console.log(idUsuario)
        const usuario = await api.buscarId(idUsuario);
        dadosBanco(usuario);
        abrirModal();

    }
})


const btnSalvar = document.querySelector("#buttonModalEditar");
if (btnSalvar) {
    btnSalvar.addEventListener('click', async function (event) {
        event.preventDefault()
        if (idUsuario) {
            const pessoas = salvarDados()
            console.log(pessoas)
            const resultadoPreenchido = await api.editar(idUsuario, pessoas)
            console.log("Resposta da API:", resultadoPreenchido);
            if (resultadoPreenchido) {
                fecharModal()
                await api.listar(idUsuario)
                await carregarCards()
            }
        }

    })
}
const btnFechar = document.querySelector("#fecharModalEditar");
btnFechar.addEventListener('click', function () {
    fecharModal()
})



// delete
document.addEventListener('click', async function (event) {

    if (event.target.classList.contains('deletarUsuario')) {
        const idExcluir = event.target.dataset.id;
        const confirmarDelete = await modalDeletar();
        if (confirmarDelete) {
            const response = await api.deletar(idExcluir);
            if (response) {
                modalDeletarSucesso();
                carregarCards();
            }
        }
    }
});

// abrir aba usuarios cadastrados
const buscarCards = document.querySelector('#btnPesquisa');
const inputPesquisa = document.querySelector('#inputPesquisa')
const esconderCard = document.querySelectorAll('.criarNovoCard')

inputPesquisa.addEventListener('input', function () {
    if (this.value.length === 0) {
        carregarCards();
    }
});

if (buscarCards) {
    buscarCards.addEventListener('click', async () => {
        const termo = inputPesquisa.value;
        const encontrou = await buscaCards(termo);

        if (encontrou) {
            sucessoBusca();
        } else {
            falhaBusca();
        }
    });
}

