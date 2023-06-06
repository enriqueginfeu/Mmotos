
import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"



export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Seccion sobre nosotros, M motos, venta de motos'}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="imagen nosotros mr motos"/>

          <div>
            <p>
            Ut sit amet dolor odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vitae varius ex, a fringilla augue. Donec tincidunt, lorem ut posuere fermentum, nunc ligula faucibus enim, in lobortis dolor lorem sed leo. Vivamus in dolor posuere, finibus tellus vitae, iaculis ante. Vivamus tempor lectus ac tempor mollis. Donec maximus quam laoreet ex pretium, non tristique libero feugiat.
            </p>
            <p>
            In pretium risus tincidunt libero viverra tempor. Proin vitae arcu sit amet sapien varius imperdiet ac et leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus malesuada ultrices magna sit amet cursus. Quisque eget lobortis ante. Suspendisse tristique purus at tortor varius feugiat. In ornare vitae leo ut blandit. Praesent mattis sodales mattis. Integer aliquet felis at cursus placerat.
            </p>
          </div>
        </div>
      </main>

    </Layout>
  )
}
