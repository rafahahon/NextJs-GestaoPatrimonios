import { api } from "./api";

export async function listarPatrimonio() {
    try {
        const response = await api.get("Patrimonio");

        return response.data;
    } catch(error: any) {
        throw new Error(error.reponse.data);
    }
}

export async function listarPorId(id: string){
    try {
        const response = await api.get("Patrimonio/" + id);

        // console.log(response.data);
        return response.data;
    } catch(error: any) {
        throw new Error(error.reponse.data);
    }
}