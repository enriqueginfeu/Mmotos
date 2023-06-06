import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";

export default function Carrito({ carrito, actualizarCantidad, actualizarTalle, eliminarProducto }) {

  
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calcularTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
    setTotal(calcularTotal)
  }, [carrito])
  

  return (
    <Layout title="Carrito de Compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito.length === 0
              ? "Carrito Vacio"
              : carrito.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        src={producto.imagen}
                        width={400}
                        height={200}
                        alt={producto.nombre}
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>
                      <p className={styles.modelo}>{producto.modelo}</p>

                    <div className={styles.cantidad}>
                    <p>Talle:</p>
                      <select 
                        className={styles.select}
                        onChange={e => actualizarTalle({
                          id: producto.id,
                          talle: e.target.value
                        })}
                        value={producto.talle}
                        >
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </div>

                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>
                        <select
                          className={styles.select}
                          onChange={e => actualizarCantidad({
                            id: producto.id,
                            cantidad: e.target.value
                          })}
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>

                      <p className={styles.precio}>
                        <span>$ {producto.precio}</span>
                      </p>

                      <p className={styles.subtotal}>
                        SubTotal:
                        <span>${producto.cantidad * producto.precio}</span>
                      </p>
                    </div>

                      <button
                        className={styles.eliminar}
                        type="button"
                        onClick={() => eliminarProducto(producto.id)}
                      >
                        X
                      </button>

                  </div>
                ))}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
