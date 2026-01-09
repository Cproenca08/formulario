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
        const pessoas = []
        const formulario = document.querySelector('form');
        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();
            pessoas.push({
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
            console.log(pessoas);
            
                modal.style.display = "block";
                formulario.reset();
          
        });
        // // script modal (ver como fazer para abrir o modal so quando o formulario for enviado com sucesso)
        const modal = document.querySelector("#abrirModal");
        const btnFechar = document.querySelector("#fecharModal");
        btnFechar.onclick = function () {
            modal.style.display = "none";
        }
