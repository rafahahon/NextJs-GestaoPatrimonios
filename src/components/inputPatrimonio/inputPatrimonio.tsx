import styles from "./inputPatrimonio.module.css"

const InputPatrimonio = () => {
    return (
        <section
            className={`${styles.table_section} layout_guide`}
            aria-label="Lista de patrimonios"
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
                <tbody>
                    <tr className="">
                        <td>1236808</td>
                        <td>MESA TRAPEZOIDAL DC-1987a</td>
                        <td>Mesa</td>
                        <td>11/02/26</td>
                        <td>
                            <a href="#" aria-label="Ver detalhes do patrimonio">
                                <img src="/info.png" />
                            </a>
                        </td>
                        <td>
                            <a href="#" aria-label="Transferir patrimonio">
                                <img src="/edit.png" />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

    )
}

export default InputPatrimonio;