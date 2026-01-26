
// maestro 
class Api {

    async salvar(pessoa) {
         try {
            const response = await axios.post(`http://localhost:3000/usuarios/`, pessoa);
            console.log(response)
            console.log(response.data.status)
            if(response.data.status === 400){
                Swal.fire({
                title: 'Já existe um usuario com esse CPF!',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#5BBCB8'
            })
            }else if(response.data.status === 201){
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
            }
            return response.data
        } catch (error) {

            console.error(error);
        }
    }

    async deletar(id) {
        try {
            const response = await axios.delete(`http://localhost:3000/usuarios/${id}`);
        } catch (error) {
            console.error(error);
        }
    }

    async editar(id, pessoa) {
        try {
            const response = await axios.patch(`http://localhost:3000/usuarios/${id}`, pessoa);
            console.log(response)
            console.log(response.data.status)
            if(response.data.status === 201){
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
            }else if(response.data.status === 400){
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
            return response.data
        } catch (error) {
            console.error(error);
        }
        
    }

    async listar() {
        try {
            const response = await axios.get('http://localhost:3000/usuarios');
            return response.data
        } catch (error) {

            console.error(error);
        }
    }

    async buscarId(id) {
        try{
            const response = await axios.get(`http://localhost:3000/usuarios/${id}`)
            console.log(response)
            return response.data
        }catch(error){
            console.error(error)
        }
    }

}
