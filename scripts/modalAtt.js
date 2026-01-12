        const modal = document.querySelector("#abrirModal");
        const btnEditarUsuario = document.querySelectorAll(".editarUsuario");
        const btnFechar = document.querySelector("#fecharModal");
        document.addEventListener('click', function(event) {
            if(event.target.classList.contains('editarUsuario')){
                modal.style.display = "block";
            }
        });
        btnFechar.onclick = function fecharmodal() {
            modal.style.display = "none";
        }