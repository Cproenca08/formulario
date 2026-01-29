
// maestro 
import { modalSalvar } from "../componentes/modal/modalSalvar.js";
import { modalEditar } from "../componentes/modal/modalEditar.js";
import { instance } from '../../../../instanciaAxios.js';
export class Api {

    async salvar(pessoa) {
         try {
            const response = await instance.post(`/usuarios/`, pessoa);
            modalSalvar(response.data.status)
            return response.data
        } catch (error) {

            console.error(error);
        }
    }

    async deletar(id) {
        try {
            const response = await instance.delete(`/usuarios/${id}`);
            return true;
        } catch (error) {
            console.error(error);
        }
    }

    async editar(id, pessoa) {
        try {
            const response = await instance.patch(`/usuarios/${id}`, pessoa);
            modalEditar(response.data.status)
            return response.data
        } catch (error) {
            console.error(error);
        }
        
    }

    async listar() {
        try {
            const response = await instance.get('/usuarios');
            return response.data
        } catch (error) {

            console.error(error);
        }
    }

    async buscarId(id) {
        try{
            const response = await instance.get(`/usuarios/${id}`)
            console.log(response)
            return response.data
        }catch(error){
            console.error(error)
        }
    }

}
