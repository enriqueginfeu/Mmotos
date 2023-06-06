import Image from "next/image"
import Link from "next/link"
import styles from '../styles/motos.module.css'



export default function Casco({casco}) {
    
    const { descripcion, imagen, nombre, precio, modelo, url } = casco
    
    return (
        <div className={styles.motos}>
            <Image src={imagen?.data[0].attributes?.formats?.medium?.url} priority={true} width={600} height={400} alt={`Imagen proteccion ${nombre}`} />

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p>{modelo}</p>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>$ {precio}</p>
                <Link href={`/cascos/${url}`} legacyBehavior>
                    <a className={styles.enlace}>
                        Ver Articulo
                    </a>
                </Link>
            </div>
        </div>
    )
}