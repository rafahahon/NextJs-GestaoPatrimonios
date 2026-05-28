import Link from "next/link";
import styles from "./inputAmbiente.module.css"

type Ambiente = {
    nomeLocal: string,
    responsavel: string,
}

const InputAmbiente = ({nomeLocal, responsavel}: Ambiente) => {
    return (
        <>
            <tbody className={styles.environment_table}>
                <tr>
                    <td>{nomeLocal}</td>
                    <td>{responsavel}</td>
                    <td>
                        {/* necessário criar detalheAmbiente */}
                        <Link href="/" aria-label="Ver detalhes da Sala">
                            <img src="./info.png" alt="Ícone de detalhes" />
                        </Link>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default InputAmbiente;