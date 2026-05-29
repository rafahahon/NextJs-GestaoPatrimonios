import Link from "next/link";
import styles from "./header.module.css"

const Header = () => {
    return (
        <>
            <header className={styles.topbar}>
                <nav className={`${styles.navbar} layout_guide`} aria-label="Menu principal">
                    <a href="#" className={styles.logo_link} aria-label="Página inicial">
                        <img src="/logosenai.png" alt="Logo SENAI" className={styles.logo} />
                    </a>
                    <ul className={styles.menu_list}>
                        <li>
                            <Link href="/listaAmbientes" className={styles.menu_link}>
                                Ambientes
                            </Link>
                        </li>

                        <li>
                            <Link href="" className={styles.menu_link}>
                                Aprovações
                            </Link>
                        </li>

                        <li>
                            <Link href="/listaPatrimoniosPorSala" className={styles.menu_link}>
                                Patrimônios
                            </Link>
                        </li>
                    </ul>

                    <section className={styles.user_area} aria-label="Informações do usuário">
                        <button className={styles.user_icon} aria-label="Abrir perfil do usuário">
                            <img src="/user.png"/>
                        </button>

                        <div className={styles.user_info}>
                            <strong>Késsia Milena</strong>
                            <span>kessia@sp.senai.br</span>
                        </div>

                        <button className={styles.arrow_button} aria-label="Abrir opções da conta">
                            <img src="/setabaixo.png" />
                        </button>
                    </section>
                    <button className={styles.hamburguer} aria-label="Abrir opções de menu ">
                        <img src="/bars.svg" />
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header;
