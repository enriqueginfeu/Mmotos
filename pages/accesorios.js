
import Link from "next/link"
import Proteccion from "../components/proteccion"
import Casco from "../components/casco"
import Layout from "../components/layout"
import styles from '../styles/grid.module.css'

export default function Protecciones({protecciones, cascos}) {
  
  return (
    <Layout
    title={'Protecciones'}
    description={'Protecciones para salir en moto, M motos, venta de motos'}
  >
    <main className="contenedor">
      <h2 className="heading">Protecciones</h2>

      <div className={styles.grid}>
        {protecciones.map(proteccion => (
          <Proteccion 
          key={proteccion.id}
          proteccion={proteccion.attributes}
          />
        ))}
      </div>

      <h2 className="heading">Cascos</h2>
      
      <div className={styles.grid}>
        {cascos?.map(casco => (
          <Casco 
          key={casco.id}
          casco={casco.attributes}

          />
        ))}
      </div>
    </main>

  </Layout>
  )
}


/*export async function getStaticProps() {
  const res = await fetch(`${process.env.MOTO_URL}/protecciones?populate=imagen`)
  const {data: protecciones} = await res.json()
  return {
    props: {
      protecciones
    }
  }
}*/

export async function getStaticProps() {
  const urlProtecciones = `${process.env.MOTO_URL}/protecciones?populate=imagen`
  const urlCascos = `${process.env.MOTO_URL}/cascos?populate=imagen`


  const [ resProtecciones, resCascos ] = await Promise.all([
    fetch(urlProtecciones),
    fetch(urlCascos)

  ])

  const [{ data: protecciones }, { data: cascos }] = await Promise.all([
    resProtecciones.json(),
    resCascos.json()
  ])

  return {
    props: {
      protecciones,
      cascos
    }
  }
}