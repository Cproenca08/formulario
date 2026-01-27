import { ApiLogin } from "./api/apiLogin.js"
const api = new ApiLogin()
const emailLogin = document.querySelector('#emailCadastro')
const nomeLogin = document.querySelector('#nomeCadastro')
const senhaLogin = document.querySelector('#senhaCadastro')
const formularioLogin = document.querySelector('#formCadastro')

formularioLogin.addEventListener('submit',async function(event){
    event.preventDefault()
    await api.salvarLogin({
        nome: nomeLogin.value,
        email: emailLogin.value,
        senha: senhaLogin.value
    })
    formularioLogin.reset();
})

// const cadastro = document.querySelector('#buttonAbrirSection')
// const sectionCadastro = document.querySelector('#abrirSectionCadastro')
// const sectionLogin = document.querySelector('#abrirSectionLogin')
// cadastro.addEventListener('click', function (){
//   sectionCadastro.style.display = "block"
//   sectionLogin.style.display = "none"
// })
// const login = document.querySelector('#buttonLogin')
// login.addEventListener('click', function() {
//     sectionCadastro.style.display = "none"
//   sectionLogin.style.display = "block"
// })