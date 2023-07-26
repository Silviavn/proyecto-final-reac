import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, nombre, detalle, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className="imgProducto" src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <p>Detalle: {detalle} </p>
        <Link to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}
export default Item