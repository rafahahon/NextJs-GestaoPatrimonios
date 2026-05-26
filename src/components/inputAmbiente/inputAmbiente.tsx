import styles from "./inputAmbiente.module.css"

const InputAmbiente = () => {
    return (
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
                <tbody>
                    <tr className="">
                        <td>Sala 30/31 (anfiteatro)</td>
                        <td>Samanta Melissa</td>
                        <td>
                            <a href="#" aria-label="Ver detalhes da Sala 30/31">
                                {/* <i className="fa-solid fa-circle-info" /> */}
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default InputAmbiente;