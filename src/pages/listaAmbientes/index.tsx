import styles from "./listaAmbientes.module.css"
import Header from "@/components/header/header";
import InputAmbiente from "@/components/inputAmbiente/inputAmbiente"

const ListaAmbientes = () => {
    return (
        <>
            <Header />

            <main className={styles.page_content}>
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
                            <img src="/sliders.png"/>
                        </button>
                    </form>
                </section>
                
                <InputAmbiente />

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

export default ListaAmbientes;