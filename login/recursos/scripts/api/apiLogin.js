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
}