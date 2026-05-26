import styles from "./inputHistorico.module.css"

const InputHistorico = () => {
    return (
        <section
            className={`${styles.table_section} layout_guide`}
            aria-label="Lista de histórico do patrimônio"
        >
            <h2>Histórico</h2>
            <table className={styles.history_table}>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Tipo de movimentação</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Responsável</th>
                        <th>Justificativa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Data">11/02/2026</td>
                        <td data-label="Tipo de movimentação">
                            <span className={styles.status_badge}>Transferência</span>
                        </td>
                        <td data-label="Origem">Sala 07/08</td>
                        <td data-label="Destino">Sala 09/10</td>
                        <td data-label="Responsável">Gustavo Lima</td>
                        <td data-label="Justificativa">
                            <a href="#" aria-label="Ver justificativa da transferência">
                                <img src="/info.png" />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

    )
}

export default InputHistorico;