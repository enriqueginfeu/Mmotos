import { useState } from "react"
import Image from "next/image"
import Layout from "../../components/layout"
import styles from "../../styles/motos.module.css"


export default function Protecciones({proteccion, agregarCarrito}) {
    
    const [cantidad, setCantidad] = useState(0)
    const [talle, setTalle] = useState([])
    
    const { nombre, modelo, descripcion, imagen, precio } = proteccion[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1 ) {
            alert('Cantidad No Valida')
            return
        }

        const proteccionSelect = {
            id: proteccion[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            modelo,
            cantidad,
            talle
        }
        
        agregarCarrito(proteccionSelect)
    }

    return (
        <Layout
        title={`${modelo}`}
        >
        
        <div className={styles.motosFull}>
        <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen proteccion ${nombre}`} />

        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p>{modelo}</p>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>$ {precio}</p>

            <form
                onSubmit={handleSubmit}
                className={styles.formulario}
            >
            <label htmlFor="talle">Talles:</label>

            <select 
            id="talle"
            onChange={ e => setTalle(e.target.value)}
            >
                <option value="0">-- Seleccionar --</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>

            <label htmlFor="cantidad">Cantidad:</label>
            <select 
                id="cantidad"
                onChange={ e => setCantidad(+e.target.value)}
            >
                <option value="0">-- Seleccionar --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <input 
                type="submit"
                value="Agregar al carrito"

            />
        </form>

        </div>

    </div>
        </Layout>
    )
}

export async function getStaticPaths() {

    const respuesta = await fetch(`${process.env.MOTO_URL}/protecciones`)
    const { data } = await respuesta.json()

    const paths = data.map(proteccion => ({
        params: {
            url: proteccion.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}) {

    const respuesta = await fetch(`${process.env.MOTO_URL}/protecciones?filters[url]=${url}&populate=imagen`)
    const { data: proteccion } = await respuesta.json()

    return {
        props: {
            proteccion
        }
    }
}