import { useEffect, useState } from "react"
import InputAmbiente from "../inputAmbiente/inputAmbiente"
import styles from "./listaAmbiente.module.css"
import { listarAmbiente } from "@/pages/api/ambienteService"
import { verificarAutenticacao } from "@/utils/auth"

interface Ambiente {
    localizacaoID: string,
    nomeLocal: string,
    localSAP: number,
    descricaoSAP: string,
    areaID: string,
    responsavel: string
}

const ListaAmbiente = ({ localizacaoID, nomeLocal, localSAP, descricaoSAP, areaID, responsavel }: Ambiente) => {

    const [ambientes, setAmbientes] = useState<Ambiente[]>([]);
    const [ordem, setOrdem] = useState("todos");
    const [pesquisa, setPesquisa] = useState("");
    const [estaAutenticado, setEstaAutenticado] = useState(false);

    async function listar() {
        try {
            const lista = await listarAmbiente();

            // erro ????
            setAmbientes(lista);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        setEstaAutenticado(verificarAutenticacao());
        listar();
    })

    const ambientesFiltragem = ambientes.filter((ambiente) => ambiente.nomeLocal.toLowerCase().includes(pesquisa.toLowerCase()))
        .sort((a, b) => {
            if (ordem === "A-Z") {
                return a.nomeLocal.localeCompare(b.nomeLocal)
            } else if (ordem === "Z-A") {
                return b.nomeLocal.localeCompare(a.nomeLocal)
            }

            return 0;
        });

    return (
        <>
            <section
                className={`${styles.page_header} layout_guide`}
                aria-labelledby="titulo-ambientes">
                <h1 id={styles.titulo_ambientes}>Ambientes</h1>
                <form className={styles.search_area} role="search">
                    <label htmlFor="pesquisa-ambiente" className={styles.sr_only}>
                        Pesquisar ambiente
                    </label>
                    <input
                        type="text"
                        id={styles.pesquisa_ambiente}
                        name="pesquisaAmbiente"
                        placeholder="Pesquise o ambiente"
                        value={pesquisa} onChange={(e) => { setPesquisa(e.target.value) }}
                    />
                    {/* <button
                        type="button"
                        className={styles.filter_button}
                        aria-label="Filtrar ambientes"
                    >
                        <img src="/sliders.png" />
                    </button> */}
                    <select
                        className={styles.filter_button}
                        value={ordem} onChange={(e) => setOrdem(e.target.value)}
                        aria-label="Filtrar ambientes"
                    >
                        <option value="todos">Todos</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </form>
            </section>

            <section
                className={`${styles.table_section} layout_guide`}
                aria-label="Lista de ambientes"
            >
                <table className={styles.environment_table}>
                    <thead>
                        <tr>
                            <th>Local</th>
                            <th>Responsável</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    {ambientesFiltragem.length > 0 ? ambientesFiltragem.map((item) => (
                        <InputAmbiente
                            key={localizacaoID}
                            nomeLocal={nomeLocal}
                            responsavel={responsavel}

                        />
                    )) : (
                        <p>Carregando ambientes...</p>
                    )}
                </table>
            </section>

            <nav className={styles.pagination} aria-label="Paginação">
                <button
                    type="button"
                    className={styles.pagination_button}
                    aria-label="Página anterior"
                >
                    ‹
                </button>
                <a href="#" className={styles.pagination_link_current} aria-current="page">
                    1
                </a>
                <a href="#" className={styles.pagination_link}>
                    2
                </a>
                <a href="#" className={styles.pagination_link}>
                    3
                </a>
                <button
                    type="button"
                    className={styles.pagination_button}
                    aria-label="Próxima página"
                >
                    ›
                </button>
            </nav>
        </>
    )
}

export default ListaAmbiente;