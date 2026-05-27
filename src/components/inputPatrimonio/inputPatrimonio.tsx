import styles from "./inputPatrimonio.module.css"

const InputPatrimonio = () => {
    return (
        <>
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
        </>
    )
}

export default InputPatrimonio;