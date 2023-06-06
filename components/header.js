import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"


export default function Header() {

    const router = useRouter()

  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>

                <Link href="/" legacyBehavior>
                    
                    <Image src="/img/logo22.png" width={150} height={65} alt="imagen logotipo mr motos"/>
                    
                </Link>

            <nav className={styles.navegacion}>
                <Link href="/" >
                    Inicio
                </Link>

                <Link href="/nosotros" legacyBehavior>
                    Nosotros
                </Link>

                <Link href="/blog" legacyBehavior>
                    Blog
                </Link>

                <Link href="/motos" legacyBehavior>
                    Motos
                </Link>

                <Link href="/accesorios" legacyBehavior>
                    Accesorios
                </Link>

                <Link href={"/carrito"} legacyBehavior>
                    <a>
                        <Image src="/img/carrito.png" width={30} height={25} alt="imagen carrito"/>
                    </a>
                    
                </Link>
            </nav>
        </div>
    </header>
  )
}
