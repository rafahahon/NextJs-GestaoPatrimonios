import InputHistorico from "../inputHistorico/inputHistorico";
import styles from "./listaHistorico.module.css"

const ListaHistorico = () => {
    return (
        <>
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
                <InputHistorico></InputHistorico>
            </table>
        </>
    )
}

export default ListaHistorico;