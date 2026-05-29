import Link from "next/link";
import styles from "./inputPatrimonio.module.css"
import { ModalImportar, ModalTransferir } from "../modals/modal";
import { useState } from "react";

type Patrimonio = {
    denominacao: string,
    numeroPatrimonio: string,
    patrimonioId: string,
    dataTransferencia: string
}

const InputPatrimonio = ({ numeroPatrimonio, denominacao, patrimonioId, dataTransferencia }: Patrimonio) => {

    const [modalSelecionado, setModalSelecionado] = useState<boolean>(false);

    return (
        <>
            <tbody>
                <tr className="">
                    <td>{numeroPatrimonio}</td>
                    <td>{denominacao}</td>
                    <td>{dataTransferencia}</td>
                    <td>
                        <Link href={"/detalhePatrimonio/" + patrimonioId} aria-label="Ver detalhes do patrimônio">
                            <img src="/info.png" />
                        </Link>
                    </td>
                    <td>
                        <button onClick={() => setModalSelecionado(true)}>
                            <img src="/transferir.svg" />
                        </button>
                        <ModalTransferir
                            isOpen={modalSelecionado}
                            onClose={() => setModalSelecionado(false)}
                        />
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default InputPatrimonio;