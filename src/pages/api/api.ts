import axios from "axios";

const apiLocal = "https://localhost:7063/api/";

// se a api estiver hospedada na nuvem
const apiRemota = "";

export const api = axios.create({
    baseURL: apiLocal
})