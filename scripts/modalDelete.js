const modalDelete = document.querySelector("#abrirModalDelete");
        const btnDeleteUsuario = document.querySelectorAll(".deletarUsuario");
        const btnFecharDelete = document.querySelector("#fecharModalDelete");
        btnDeleteUsuario.forEach(imagem => {
            imagem.onclick = function () {
                modalDelete.style.display = "block";
            }
        });
        btnFecharDelete.onclick = function () {
            modalDelete.style.display = "none";
        }