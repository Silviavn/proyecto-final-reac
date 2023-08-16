import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

//Importamos el CarritoContext:
import { CarritoContext } from '../../context/CarritoContext';
//Importamos el Hook useContext: 
import { useContext } from 'react';


const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  ///////////////// traemos del context la función agregar producto:
  const { agregarProducto } = useContext(CarritoContext);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora acá voy a crear un objeto con el item y la cantidad: 
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);

  }
  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam modi quibusdam quasi illum, assumenda at sunt iure voluptas quaerat tempore explicabo nam voluptates rem culpa voluptate. Ipsa qui dicta repellat.</p>
      <img src={img} alt={nombre} />

      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail