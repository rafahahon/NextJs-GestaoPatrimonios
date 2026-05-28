import InputPatrimonio from "../inputPatrimonio/inputPatrimonio";
import styles from "./listaPatrimonio.module.css"

interface Patrimonio {
    patrimonioID: string,
    denominacao: string,
    numeroPatrimonio: string,
    valor: number,
    imagem: string,
    localizacaoID: string,
    statusPatrimonioID: string
  }

const ListaPatrimonio = ({patrimonioID, denominacao, numeroPatrimonio, valor, imagem, localizacaoID, statusPatrimonioID}: Patrimonio) => {
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
                        id="pesquisa-patrimobio"
                        name="pesquisaAmbiente"
                        placeholder="Pesquise o patrimônio"
                    />
                    <button type="button" className={styles.add_button} aria-label="Adicionar patrimônios">
                        <i className="fa-solid fa-plus" /> Patrimônio
                    </button>
                    <button
                        type="button"
                        className={styles.filter_button}
                        aria-label="Filtrar patrimônios"
                    >
                        <i className="fa-solid fa-sliders" />
                    </button>
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
                    <InputPatrimonio
                        key={patrimonioID}
                        denominacao={denominacao}
                        numeroPatrimonio={numeroPatrimonio}                  
                    />
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