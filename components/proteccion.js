import Image from "next/image"
import Link from "next/link"
import styles from '../styles/motos.module.css'



export default function Proteccion({proteccion}) {
    
    const { descripcion, imagen, nombre, precio, modelo, url } = proteccion
    
    return (
        <div className={styles.motos}>
            <Image src={imagen.data.attributes.formats.medium.url} width={400} height={200} alt={`Imagen proteccion ${nombre}`} />

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p>{modelo}</p>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>$ {precio}</p>
                <Link href={`/protecciones/${url}`} legacyBehavior>
                    <a className={styles.enlace}>
                        Ver Articulo
                    </a>
                </Link>
            </div>
        </div>
    )
}