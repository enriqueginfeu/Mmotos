import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : [] 
  const [carrito, setCarrito] = useState(carritoLS)
  const [paginaLista, setPaginaLista] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  

  const agregarCarrito = casco => {
    // Comprobar el producto ya esta en el carrito...
    if(carrito.some( cascoState =>  cascoState.id === casco.id )) {
        // Iterar para actualizar la cantidad
        const carritoActualizado = carrito.map( cascoState => {
            if( cascoState.id === casco.id ) {
                cascoState.cantidad = casco.cantidad;
            } 
            return cascoState;
        });
        // Se asigna al array
        setCarrito([...carritoActualizado]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    } else {
        // En caso de que el articulo no exista, es nuevo y se agrega
        setCarrito([...carrito, casco]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    }
}

const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

const actualizarCantidad = casco => {
  const carritoActualizado = carrito.map( cascoState => {
    if(cascoState.id === casco.id ) {
      cascoState.cantidad = parseInt( casco.cantidad )
    } 
    return cascoState
  })
  setCarrito(carritoActualizado)
  window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

const actualizarTalle = casco => {
  const carritoActualizado = carrito.map( cascoState => {
    if(cascoState.id === casco.id ) {
      cascoState.talle =  casco.talle 
    } 
    return cascoState
  })
  setCarrito(carritoActualizado)
  window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}


  return paginaLista ? <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}
    actualizarTalle={actualizarTalle}
  /> : null
}

export default MyApp
