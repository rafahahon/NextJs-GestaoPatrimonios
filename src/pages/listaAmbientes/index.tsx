import styles from "./listaAmbientes.module.css"
import Header from "@/components/header/header";
import ListaAmbiente from "@/components/listaAmbiente/listaAmbiente";

const ListaAmbientes = () => {
    return (
        <>
            <Header />

            <main className={styles.page_content}>
                
                
                <ListaAmbiente />

                
            </main>

        </>
    )

}

export default ListaAmbientes;