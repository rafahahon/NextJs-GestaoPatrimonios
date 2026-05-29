import { api } from "./api";

export async function listarHistoricoPorId(id: string) {
    try {
        const response = await api.get("LogPatrimonio/patrimonio/" + id)

        return response.data;
    } catch(error: any) {
        throw new Error(error.reponse.data);
    }

}