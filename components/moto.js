import Image from "next/image"
import Link from "next/link"
import styles from '../styles/motos.module.css'



export default function Moto({moto}) {
    
    const { descripcion, imagen, nombre, precio, modelo, url } = moto
    
    return (
        <div className={styles.motos}>
            <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen moto ${nombre}`} />

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p>{modelo}</p>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}> USD {precio}</p>
                <Link href={`/motos/${url}`} legacyBehavior>
                    <a className={styles.enlace}>
                        Ver Moto
                    </a>
                </Link>
            </div>
        </div>
    )
}
