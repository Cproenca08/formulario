//  const Armazenamento = new ArmazenamentoLocal();
const api = new Api();
 const telefone = document.querySelector('#telefone') ;
        const cpf = document.querySelector('#cpf');
        const nome = document.querySelector('#nome');
        const cep = document.querySelector('#cep');
        const email = document.querySelector('#email');
        const data = document.querySelector('#data');
        const rua = document.querySelector('#rua');
        const bairro = document.querySelector('#bairro');
        const numero = document.querySelector('#numero');
        const button = document.querySelector('#button');
        const formulario = document.querySelector('form');
        let listaA = []
        function listaUsuario(usuario){
            const biblioteca = new XMLHttpRequest()
            biblioteca.open('GET', 'http://localhost:3000/usuarios')
            biblioteca.onload = function(){
            const listaA =  JSON.parse(biblioteca.responseText)
            usuario(listaA)
            console.log(usuario)
        }
            biblioteca.send()
        }


        
        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();
            const cpfExiste = cpf.value
           
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
          
        });
        

        // script modal (ver como fazer para abrir o modal so quando o formulario for enviado com sucesso)
        const modal = document.querySelector("#abrirModal");

        const btnFechar = document.querySelector("#fecharModal");
        btnFechar.onclick = function () {
            modal.style.display = "none";
        }
              
        
        