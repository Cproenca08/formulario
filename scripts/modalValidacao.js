//  const Armazenamento = new ArmazenamentoLocal();
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
const button = document.querySelector('#button');
const abrirSection = document.querySelector('#buttonAbrirSection')
const formulario = document.querySelector('form');
const ususariosCadastrados = document.querySelector('#abrirSection')
const sectionPrincipal = document.querySelector('#abrirSectionPrincipal')
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    api.listar(function (listapessoas) {
        const cpfDigitado = cpf.value
        const cpfVerificar = listapessoas.some(function (pessoa) { // verifica se pelo menos um elemento atende a condiçao cpfBanco === cpfDigitado
            const cpfBanco = pessoa.cpf
            return cpfBanco === cpfDigitado
        })
        if (cpfVerificar) {
            Swal.fire({
                title: 'CPF cadastrado!',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#5BBCB8'
            })
        } else {
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
            api.salvar({
                telefone: telefone.value,
                cpf: cpf.value,
                nome: nome.value,
                cep: cep.value,
                email: email.value,
                data: data.value,
                rua: rua.value,
                bairro: bairro.value,
                numero: numero.value,
            })
            formulario.reset();
        }
    })
});
abrirSection.onclick = function () {
    ususariosCadastrados.style.display = "block"
    sectionPrincipal.style.display = "none"
    carregarCards();
}
// script modal (ver como fazer para abrir o modal so quando o formulario for enviado com sucesso)
const modal = document.querySelector("#abrirModal");
const btnFechar = document.querySelector("#fecharModal");



