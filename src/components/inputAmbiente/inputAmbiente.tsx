import styles from "./inputAmbiente.module.css"

const InputAmbiente = () => {
    return (
        <>
            <tbody className={styles.environment_table}>
                <tr>
                    <td>Sala 30/31 (anfiteatro)</td>
                    <td>Samanta Melissa</td>
                    <td>
                        <a href="#" aria-label="Ver detalhes da Sala 30/31">
                            <img src="./info.png" alt="Ícone de detalhes" />
                        </a>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default InputAmbiente;