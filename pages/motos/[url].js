import Image from "next/image"
import Layout from "../../components/layout"
import styles from "../../styles/motos.module.css"

export default function Motos({moto}) {
    
    const { nombre, modelo, descripcion, imagen, precio } = moto[0].attributes

    return (
        <Layout
        title={`${modelo}`}
        >
        
        <div className={styles.motosFull}>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
        <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen moto ${nombre}`} />

            </div>

        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p>{modelo}</p>
            <p className={styles.descripcion}>{descripcion}</p>
            
            <p className={styles.precio}> USD {precio}</p>
        
            <form className={styles.formulario}>

            <input 
                type="submit"
                value="Contactar"
            />
        </form>

        </div>
    </div>
        </Layout>
    )
}

export async function getStaticPaths() {

    const respuesta = await fetch(`${process.env.MOTO_URL}/motos`)
    const { data } = await respuesta.json()

    const paths = data.map(moto => ({
        params: {
            url: moto.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}) {

    const respuesta = await fetch(`${process.env.MOTO_URL}/motos?filters[url]=${url}&populate=imagen&pagination[pageSize]=50`)
    const { data: moto } = await respuesta.json()

    return {
        props: {
            moto
        }
    }
}