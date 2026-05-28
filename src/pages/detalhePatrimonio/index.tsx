import styles from "./detalhePatrimonio.module.css"
import Header from "@/components/header/header"
import ListaHistorico from "@/components/listaHistorico/listaHistorico"
import Link from "next/link"

const DetalhePatrimonio = () => {
    return (
        <>
            <Header />
            <main className={styles.page_content}>
                <section
                    className={`${styles.page_detalhes} layout_guide`}
                    aria-labelledby="titulo-patrimonio"
                >
                    <Link href="/listaPatrimoniosPorSala" className={styles.back_link}>
                        <img src="./setaD.png"/>
                        Voltar
                    </Link>
                    <h1 id={styles.titulo_patrimonio}>Patrimônio: 1236808</h1>
                    <article className={styles.patrimonio_card}>
                        <div className={styles.patrimonio_content}>
                            <dl>
                                <dt>Denominação</dt>
                                <dd>NOTEBOOK ALTO DESEMPENHO P/ GAMER</dd>
                            </dl>
                            <dl>
                                <dt>Tipo</dt>
                                <dd>Mesa</dd>
                            </dl>
                            <dl>
                                <dt>Data transferência</dt>
                                <dd>
                                    <time dateTime="2026-02-09">09/02/2026</time>
                                </dd>
                            </dl>
                            <dl>
                                <dt>Local Atual</dt>
                                <dd>Sala 09/10</dd>
                            </dl>
                            <dl>
                                <dt>Status Atual</dt>
                                <dd>Ativo</dd>
                            </dl>
                        </div>
                    </article>
                </section>

                {/* listaHistorico */}
                <section className={`${styles.table_section} layout_guide`}
                aria-label="Lista de histórico do patrimônio">
                    <h2>Histórico</h2>
                    <ListaHistorico />
                </section>

            </main>
        </>
    )
}

export default DetalhePatrimonio;