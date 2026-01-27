import { pesquisaCepEditar } from "../utilidades/cep.js";
export function modalEditar(statusEditar) {
    console.log(statusEditar)
    console.log(statusEditar)
    if (statusEditar === 201) {
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
            title: "Dados do usuário atualizados com sucesso!",
            customClass: {
                popup: 'alert-cadastro'
            }

        });
    } else if (statusEditar === 400) {
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
        Swal.fire({
            title: "ERRO!",
            text: "Não é possível editar o CPF, para o de um usuário já existente!",
            icon: "warning",
            confirmButtonColor: '#5BBCB8'
        });
    }
}



const telefoneAtt = document.querySelector('#telefoneEditar');
const cpfAtt = document.querySelector('#cpfEditar');
const nomeAtt = document.querySelector('#nomeEditar');
const cepAtt = document.querySelector('#cepEditar');
const emailAtt = document.querySelector('#emailEditar');
const dataAtt = document.querySelector('#dataEditar');
const ruaAtt = document.querySelector('#ruaEditar');
const bairroAtt = document.querySelector('#bairroEditar');
const numeroAtt = document.querySelector('#numeroEditar');

const cidadeAtt = document.querySelector('#cidadeEditar');
const ufAtt = document.querySelector('#ufEditar');
if (cepAtt) {
    cepAtt.addEventListener('blur', function() {
        const cepPesquisa = this.value
        if (cepPesquisa.length === 8) {
            pesquisaCepEditar(cepPesquisa);
        }
    });
}

export function abrirModal() {
    const modalEditar = document.querySelector("#abrirModalEditar");
    modalEditar.style.display = "block";
}

export function fecharModal() {
    const modalEditar = document.querySelector("#abrirModalEditar");
    modalEditar.style.display = "none";
}


export async function dadosBanco(usuario) {
   
 
        const dataFormatada = usuario.DATA.split('T')
        console.log(dataFormatada)
            telefoneAtt.value = usuario.TELEFONE
            cpfAtt.value = usuario.CPF
            nomeAtt.value = usuario.NOME
            cepAtt.value = usuario.CEP
            emailAtt.value = usuario.EMAIL
            dataAtt.value = dataFormatada[0]
            ruaAtt.value = usuario.RUA
            bairroAtt.value = usuario.BAIRRO
            numeroAtt.value = usuario.NUMERO
            cidadeAtt.value = usuario.CIDADE
            ufAtt.value = usuario.UF
            
        
    
}


export function salvarDados() {
 
   
    const dataFormatada = new Date(dataAtt.value).toISOString().split('T')
            const pessoas = {
                nome: nomeAtt.value,
                cpf: cpfAtt.value,
                email: emailAtt.value,
                data: dataFormatada[0],
                telefone: telefoneAtt.value,
                rua: ruaAtt.value,
                numero: numeroAtt.value,
                bairro: bairroAtt.value,
                cep: cepAtt.value,
                cidade: cepAtt.value,
                uf: ufAtt.value
            }
            console.log(pessoas)
          return pessoas;
}










