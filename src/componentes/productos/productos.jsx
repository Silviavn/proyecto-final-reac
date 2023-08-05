import { useState, useEffect, cloneElement } from "react"
import {getDocs, collection, query, where, doc, updateDoc} from "firebase/firestore";
import { db } from "../services/config";
import '../Productos.css'


const Productos = () => {
  //Arrancamos con un estado que almzacena mi array de productos y comenzara vacio

  const [productos, setProductos] = useState([]);
  useEffect( () => {
    const misProductos = query(collection(db, "productos"));
    //Utilizaremos un fitrado
    //const misProductos = query(collection(db, "productos"),where("precio", "<", 5000)) ;

    //Aqui obtengo mis productos de la base de datos e ingresamos el nombre de nuestra coleccion y para obteneros usamos getDocs

    getDocs(misProductos)
    .then(respuesta => {
      setProductos(respuesta.docs.map(doc => ({id: doc.id, ...doc.data})));
      //Creo un nuevo arrray que contega los datos y el id
    })
    .catch(error => {
      console.log(error)
    })
    //Descontamos stock cada vez que haga click en comprar

},[])

const descontarStock = async (producto) => {
  const productoRef = doc(db, "productos", producto.id);
  let nuevoStock = producto.stock - 1;

  await updateDoc(productoRef, {stock: nuevoStock});
}
  return (
    <>
    <h2>Productos firestore</h2>
    <div className="productos-container">
    {
      productos.map(producto => (
        <div className="producto-card">
          <img className = "imgProducto"src={producto.img} alt={producto.nombre} />
          <h3>{producto.nombre}</h3>
          <p>Precio: {producto.precio}</p>
          <p>Detalle: {producto.detalle}</p>
          <p>Stock: {producto.stock}</p>
          <button onClick={descontarStock(producto)}> Comprar </button>

        </div>

      ))
    }
    </div>
    </>
  )
}

export default Productos