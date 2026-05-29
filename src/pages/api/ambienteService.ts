// ambiente no caso é o local 

import { api } from "./api";

export async function listarAmbiente() {
    try {
        const response = await api.get("Localizacao");
        return response;
    } catch(error:any) {
        throw new Error(error.reponse.data);
    }
}