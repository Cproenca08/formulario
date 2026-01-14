        const salvar = new Api()
        const modal = document.querySelector("#abrirModal");
        const btnEditarUsuario = document.querySelectorAll(".editarUsuario");
        const btnFechar = document.querySelector("#fecharModal");
        const btnSalvar = document.querySelector("#button");
        const telefoneAtt = document.querySelector('#telefone') ;
        const cpfAtt = document.querySelector('#cpf');
        const nomeAtt = document.querySelector('#nome');
        const cepAtt = document.querySelector('#cep');
        const emailAtt = document.querySelector('#email');
        const dataAtt = document.querySelector('#data');
        const ruaAtt = document.querySelector('#rua');
        const bairroAtt = document.querySelector('#bairro');
        const numeroAtt = document.querySelector('#numero');
        let idUsuario = null
        document.addEventListener('click', function(event) {
            if(event.target.classList.contains('editarUsuario')){
                idUsuario = event.target.dataset.id
                api.buscarPorId(idUsuario, function(dadosAtt) {
                     telefoneAtt.value = dadosAtt.telefone
                     cpfAtt.value = dadosAtt.cpf
                     nomeAtt.value = dadosAtt.nome
                     cepAtt.value = dadosAtt.cep
                     emailAtt.value = dadosAtt.email
                     dataAtt.value = dadosAtt.data
                     ruaAtt.value = dadosAtt.rua
                     bairroAtt.value = dadosAtt.bairro
                     numeroAtt.value = dadosAtt.numero
                     modal.style.display = "block";
                })
                
            }
        });
        btnFechar.onclick = function fecharmodal() {
            modal.style.display = "none";
            idUsuario = null
        }

        if(btnSalvar){
            btnSalvar.addEventListener('click', function(){
                if(idUsuario){
                    salvar.editar()
                }
            })
        }
