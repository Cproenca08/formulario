 const Armazenamento = new ArmazenamentoLocal();
 
//  const telefone = document.querySelector('#telefone') ;
//         const cpf = document.querySelector('#cpf');
//         const nome = document.querySelector('#nome');
//         const cep = document.querySelector('#cep');
//         const email = document.querySelector('#email');
//         const data = document.querySelector('#data');
//         const rua = document.querySelector('#rua');
//         const bairro = document.querySelector('#bairro');
//         const numero = document.querySelector('#numero');
        const button = document.querySelector('#button');
        // let pessoas = JSON.string(('banco_pessoas')) || [];
        const formulario = document.querySelector('form');




        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();
            const cpf = document.querySelector('#cpf');
            const cpfExistente = listaUsusarios.find(pessoa => pessoa.cpf === cpf.value);
            if (cpfExistente) {
                alert("CPF já cadastrado!");
                return;
            }
            const novaPessoa ={
                telefone: document.querySelector('#telefone').value,
                cpf: document.querySelector('#cpf').value,
                nome: document.querySelector('#nome').value,
                cep: document.querySelector('#cep').value,
                email: document.querySelector('#email').value,
                data: document.querySelector('#data').value,
                rua: document.querySelector('#rua').value,
                bairro:document.querySelector('#bairro').value,
                numero: document.querySelector('#numero').value,
            }
    
            Armazenamento.salvar(pessoas);
        
            console.log(novaPessoa);


           Armazenamento.reset()
          
        });

        // script modal (ver como fazer para abrir o modal so quando o formulario for enviado com sucesso)
        const modal = document.querySelector("#abrirModal");
        const btnFechar = document.querySelector("#fecharModal");
        btnFechar.onclick = function () {
            modal.style.display = "none";
        }
              
        
        