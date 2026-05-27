import InputPatrimonio from "../inputPatrimonio/inputPatrimonio";
import styles from "./listaPatrimonio.module.css"

const ListaPatrimonio = () => {
    return (
        <>
            <section
                className={`${styles.page_header} layout_guide`}
                aria-labelledby="titulo-patrimonios"
            >
                <h1 id="titulo-patrimonios">Patrimônios: Sala 09/10</h1>
                <form className={styles.search_area} role="search">
                    <label htmlFor="pesquisa-ambiente" className="sr-only">
                        Pesquisar patrimônios
                    </label>
                    <input
                        type="search"
                        id="pesquisa-ambiente"
                        name="pesquisaAmbiente"
                        placeholder="Pesquise o ambiente"
                    />
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
                            <th>Tipo</th>
                            <th>Data transfêrencia</th>
                            <th>Detalhes</th>
                            <th>Transferir</th>
                        </tr>
                    </thead>
                    <InputPatrimonio></InputPatrimonio>
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