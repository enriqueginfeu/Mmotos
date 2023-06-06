
import Layout from "../components/layout"
import Moto from "../components/moto"
import styles from '../styles/grid.module.css'

export default function Motos({motos}) {

  return (
    <Layout
    title={'Motos'}
    description={'Motos por marca, M motos, venta de motos'}
  >
    <main className="contenedor">
      <h2 className="heading">Motos</h2>

      <div className={styles.grid}>
        {motos.map(moto => (
          <Moto 
          key={moto.id}
          moto={moto.attributes}

          />
        ))}
      </div>

    </main>

  </Layout>
  )
}


export async function getStaticProps() {
  const res = await fetch(`${process.env.MOTO_URL}/motos?populate=imagen`)
  const {data: motos} = await res.json()
  return {
    props: {
      motos
    }
  }
}