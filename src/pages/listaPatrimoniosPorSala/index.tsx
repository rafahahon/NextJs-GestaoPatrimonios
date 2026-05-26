import styles from "./listaPatrimoniosPorSala.module.css"
import Header from "@/components/header/header"
import InputPatrimonio from "@/components/inputPatrimonio/inputPatrimonio"

const ListaPatrimonioPorSala = () => {
    return (
        <>
            <Header />
            <main className={styles.page_content}>
                <section
                    className="page-header layout_guide"
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
                            aria-label="Filtrar patrimonios"
                        >
                            <i className="fa-solid fa-sliders" />
                        </button>
                    </form>
                </section>

                {/* INPUT */}
                <InputPatrimonio />

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
            </main>
        </>
    )
}

export default ListaPatrimonioPorSala;