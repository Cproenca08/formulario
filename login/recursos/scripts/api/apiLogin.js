import { modalSalvarLogin } from "../componente/modal/modalSalvarLogin.js";

export class ApiLogin {

    async salvarLogin(pessoa) {
         try {
            const response = await axios.post(`http://localhost:3000/login/`, pessoa);
            modalSalvarLogin(response.data.status)
            return response.data
        } catch (error) {

            console.error(error);
        }
    }
    async verificarLogin(dadosLogin){
        try {
            const response = await axios.post(`http://localhost:3000/logar`, dadosLogin);
            return response.data;
        } catch (error) {
            console.error("Erro ao logar", error);
            return null;
        }
    }
}
    

