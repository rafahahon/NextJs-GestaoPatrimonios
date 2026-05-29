import { useEffect, useState } from "react";
import InputPatrimonio from "../inputPatrimonio/inputPatrimonio";
import styles from "./listaPatrimonio.module.css"
import { listarPatrimonio } from "@/pages/api/patrimonioService";
import { verificarAutenticacao } from "@/utils/auth";

interface Patrimonio {
    patrimonioID: string,
    denominacao: string,
    numeroPatrimonio: string,
    dataTransferencia: string,
    valor: number,
    imagem: string,
    localizacaoID: string,
    statusPatrimonioID: string
  }

const ListaPatrimonio = () => {

    const [patrimonios, setPatrimonios] = useState<Patrimonio[]>([]);
    const [ordem, setOrdem] = useState("todos");
    const [pesquisa, setPesquisa] = useState("");
    const [estaAutenticado, setEstaAutenticado] = useState(false);

    async function listar() {
        try {
            const lista = await listarPatrimonio();

            setPatrimonios(lista);
        } catch(error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        setEstaAutenticado(verificarAutenticacao());
        listar();
    }, [])

    const patrimoniosFiltragem = patrimonios.filter((patrimonio) => patrimonio.denominacao.toLowerCase().includes(pesquisa.toLowerCase()))
    .sort((a, b) => {
        if(ordem === "A-Z"){
            return a.denominacao.localeCompare(b.denominacao)
        } else if(ordem === "Z-A") {
            return b.denominacao.localeCompare(a.denominacao)
        }

        return 0;
    });

    return (
        <>
            <section
                className={`${styles.page_header} layout_guide`}
                aria-labelledby="titulo-patrimonios"
            >
                <h1 id={styles.titulo_patrimonios}>Patrimônios: Sala 09/10</h1>
                <form className={styles.search_area} role="search">
                    
                    <input
                        type="search"
                        id="pesquisa-patrimonio"
                        name="pesquisaPatrimonio"
                        placeholder="Pesquise o patrimônio"
                        value={pesquisa} onChange={(e) => {setPesquisa(e.target.value)}}
                    />
                    {/* modalImportar */}
                    <button type="button" className={styles.add_button} aria-label="Adicionar patrimônios">
                        <img src="/add.png" className="fa-solid fa-plus" /> Patrimônio
                    </button>
                    <select
                        className={styles.filter_button}
                        value={ordem} onChange={(e) => setOrdem(e.target.value)}
                        aria-label="Filtrar patrimônios"
                    >
                        {/* preciso trocar a imagem e descobrir como colocar icone no */}
                        {/* <img src="/sliders.png" className="fa-solid fa-sliders" /> */}
                        {/* <option value="0" disabled defaultValue={0}><img src="/sliders.png" className="fa-solid fa-sliders" /></option> */}
                        <option value="todos">Todos</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </form>
            </section>

            <section
                className={`${styles.table_section} layout_guide`}
                aria-label="Lista de patrimônios"
            >
                <table className={styles.environment_table}>
                    <thead>
                        <tr>
                            <th>Patrimônio</th>
                            <th>Denominação</th>
                            <th>Data transfêrencia</th>
                            <th>Detalhes</th>
                            <th>Transferir</th>
                        </tr>
                    </thead>
                    {patrimoniosFiltragem.length > 0 ? patrimoniosFiltragem.map((item) => (
                    <InputPatrimonio
                        key={item.patrimonioID}
                        denominacao={item.denominacao}
                        numeroPatrimonio={item.numeroPatrimonio}   
                        dataTransferencia={item.dataTransferencia}               
                        patrimonioId={item.patrimonioID}
                    />
                    )) : (
                        <p>Carregando patrimônios...</p>
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

export default ListaPatrimonio;