import Link from "next/link";
import styles from "../styles/footer.module.css"


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>

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
        </nav>
        <p className={styles.copy}>
          Todos los derechos reservado { new Date().getFullYear() }
        </p>
      </div>
    </footer>
  );
}
