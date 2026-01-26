const numeros = document.querySelectorAll('#telefone,#cep,#cpf');
numeros.forEach(input => {
            input.addEventListener('keypress', (evento) => {
                if ((evento.keyCode < 48 || evento.keyCode > 57)
                    && evento.keyCode !== 46 && evento.keyCode
                    !== 45 && evento.keyCode !== 40 && evento.keyCode 
                    !== 41 && evento.keyCode !== 32) {
                    evento.preventDefault();
                }
            });
        });
