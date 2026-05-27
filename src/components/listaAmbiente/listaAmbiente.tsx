import InputAmbiente from "../inputAmbiente/inputAmbiente"
import styles from "./listaAmbiente.module.css"

const ListaAmbiente = () => {
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
                        type="search"
                        id={styles.pesquisa_ambiente}
                        name="pesquisaAmbiente"
                        placeholder="Pesquise o ambiente"
                    />
                    <button
                        type="button"
                        className={styles.filter_button}
                        aria-label="Filtrar ambientes"
                    >
                        <img src="/sliders.png" />
                    </button>
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
                    <InputAmbiente></InputAmbiente>
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