const modal = document.querySelector("#abrirModal");
        const btnEditarUsuario = document.querySelectorAll(".editarUsuario");
        const btnFechar = document.querySelector("#fecharModal");
        btnEditarUsuario.forEach(imagem => {
            imagem.onclick = function () {
                modal.style.display = "block";
            }
        });
        btnFechar.onclick = function () {
            modal.style.display = "none";
        }