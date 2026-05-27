import styles from "./listaPatrimoniosPorSala.module.css"
import Header from "@/components/header/header"
import ListaPatrimonio from "@/components/listaPatrimonio/listaPatrimonio"

const ListaPatrimonioPorSala = () => {
    return (
        <>
            <Header></Header>
            <main className={styles.page_content}>

                {/* INPUT */}
                <ListaPatrimonio />

                
            </main>
        </>
    )
}

export default ListaPatrimonioPorSala;