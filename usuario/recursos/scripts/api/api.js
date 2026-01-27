
// maestro 
import { modalSalvar } from "../componentes/modal/modalSalvar.js";
import { modalEditar } from "../componentes/modal/modalEditar.js";

export class Api {

    async salvar(pessoa) {
         try {
            const response = await axios.post(`http://localhost:3000/usuarios/`, pessoa);
            modalSalvar(response.data.status)
            return response.data
        } catch (error) {

            console.error(error);
        }
    }

    async deletar(id) {
        try {
            const response = await axios.delete(`http://localhost:3000/usuarios/${id}`);
            return true;
        } catch (error) {
            console.error(error);
        }
    }

    async editar(id, pessoa) {
        try {
            const response = await axios.patch(`http://localhost:3000/usuarios/${id}`, pessoa);
            modalEditar(response.data.status)
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
