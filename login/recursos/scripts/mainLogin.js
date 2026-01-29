import { carregarXML } from "../../../usuario/recursos/scripts/componentes/utilidades/imagemXML.js"
import { ApiLogin } from "./api/apiLogin.js"
import { sessaoFalhaEmailSenha } from './componente/modal/modalLoginSessão.js'
carregarXML()
const api = new ApiLogin()
const emailCadastro = document.querySelector('#emailCadastro')
const nomeCadastro = document.querySelector('#nomeCadastro')
const senhaCadastro = document.querySelector('#senhaCadastro')
const emailLogin = document.querySelector('#emailLogin')
const senhaLogin = document.querySelector('#senhaLogin')
const formularioCadastro = document.querySelector('#formCadastro')
const formularioLogin = document.querySelector('#fomularioLogin')

formularioLogin.addEventListener('submit', async function (event) {
    event.preventDefault()

    const resultado = await api.verificarLogin({email: emailLogin.value, senha: senhaLogin.value});
    if(resultado && resultado.token){
        const sessaoUsuario ={
            logado: true,
            email: resultado.usuario.email,
            senha: resultado.usuario.senha
        }
        console.log(sessaoUsuario)
        console.log("Sessão salva:", sessaoUsuario) 
        window.location.href = "../../../usuario/index.html";
    }else{
        sessaoFalhaEmailSenha()
    }
})


formularioCadastro.addEventListener('submit',async function(event){
    event.preventDefault()
    await api.salvarLogin({
        nome: nomeCadastro.value,
        email: emailCadastro.value,
        senha: senhaCadastro.value
    })
    formularioCadastro.reset();
})

const cadastro = document.querySelector('#buttonAbrirSection')
const sectionCadastro = document.querySelector('#abrirSectionCadastro')
const sectionLogin = document.querySelector('#abrirSectionLogin')
cadastro.addEventListener('click', function (){
  sectionCadastro.style.display = "block"
  sectionLogin.style.display = "none"
})
const login = document.querySelector('#buttonLogin')
login.addEventListener('click', function() {
    sectionCadastro.style.display = "none"
  sectionLogin.style.display = "block"
})

