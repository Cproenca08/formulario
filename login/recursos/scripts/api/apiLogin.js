import { modalSalvarLogin } from "../componente/modal/modalSalvarLogin.js";
import { instance } from '../../../../instanciaAxios.js';
export class ApiLogin {

    async salvarLogin(pessoa) {
         try {
            const response = await instance.post(`/login/`, pessoa);
            modalSalvarLogin(response.data.status)
            return response.data
        } catch (error){

            console.error(error);
        }
    }
    async verificarLogin(dadosLogin){
        try {
            const response = await instance.post(`/logar`, dadosLogin);
            if (response.data && response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('nome', response.data.usuario.nome);
            return response.data; // Retorna o sucesso
        }
        return null;
        } catch (error){
            console.error("Erro ao logar", error);
            return null;
        }
    }
}
    

