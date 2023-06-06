
import Link from "next/link"
import Layout from "../components/layout"
import Moto from "../components/moto"
import Post from "../components/post"
import styles from "../styles/grid.module.css"
import Cursos from "../components/cursos"

export default function Home({motos, posts, cursos}) {

  return (
    <>
    <Layout
      title={'Inicio'}
      description={'Venta de motos, accesorios y un blog con mucha info'}
    >
    <main className="contenedor">
        <h2 className="heading">Nuestra coleccion de motos</h2>
        <div className={styles.grid}>
        {motos.map(moto => (
          <Moto 
          key={moto.id}
          moto={moto.attributes}
          />
        ))}
      </div>
      <div className="margin">
          <Link href={'/motos'} legacyBehavior>
            <a className="enlace drop">
            Ver Mas...
            </a>
          </Link>
      </div>
    </main>

          <Cursos 
            cursos={cursos.attributes}
          />

    <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.gridPost}>
        {posts.map(post => (
          <Post 
            key={post.id}
            post={post.attributes}
          
          />
        ))}
      </div>
      <div className="margin">
          <Link href={'/blog'} legacyBehavior>
            <a className="enlace">
              Ver Mas...
            </a>
          </Link>
      </div>
    </section>
    </Layout>
    
    </>
  )
}

export async function getStaticProps() {
  const urlMotos = `${process.env.MOTO_URL}/motos?populate=imagen&pagination[pageSize]=3`
  const urlPosts = `${process.env.MOTO_URL}/posts?populate=imagen&pagination[pageSize]=3`
  const urlCursos = `${process.env.MOTO_URL}/curso?populate=imagen`

  const [ resMotos, resPosts, resCursos ] = await Promise.all([
    fetch(urlMotos),
    fetch(urlPosts),
    fetch(urlCursos)
  ])

  const [{ data: motos }, { data: posts }, { data: cursos }] = await Promise.all([
    resMotos.json(),
    resPosts.json(),
    resCursos.json()
  ])

  return {
    props: {
      motos,
      posts,
      cursos
    }
  }
}
