const ususariosCadastradosVoltar = document.querySelector('#abrirSection')
const sectionPrincipalVoltar = document.querySelector('#abrirSectionPrincipal')
const voltar = document.querySelector('#voltarSection')
voltar.onclick = function (){
    ususariosCadastradosVoltar.style.display = "none"
    sectionPrincipalVoltar.style.display = "block"
}