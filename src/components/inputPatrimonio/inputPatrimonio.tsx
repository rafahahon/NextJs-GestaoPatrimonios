import Link from "next/link";
import styles from "./inputPatrimonio.module.css"

type Patrimonio = {
    numeroPatrimonio: string,
    denominacao: string,
    // dataTransferencia: 
}

const InputPatrimonio = ({numeroPatrimonio, denominacao}: Patrimonio) => {
    return (
        <>
            <tbody>
                <tr className="">
                    <td>{numeroPatrimonio}</td>
                    <td>{denominacao}</td>
                    <td>11/02/26</td>
                    <td>
                        <Link href="/detalhePatrimonio" aria-label="Ver detalhes do patrimônio">
                            <img src="/info.png" />
                        </Link>
                    </td>
                    <td>
                        <a href="#" aria-label="Transferir patrimônio">
                            <img src="/transferir.svg" />
                        </a>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default InputPatrimonio;