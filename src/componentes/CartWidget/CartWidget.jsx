import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);

  return (
    <div>
        <Link to="/cart">
            <img className='imgCarrito' src="https://res.cloudinary.com/dmicwl879/image/upload/v1689604080/411-4119202_carro-compra-png-carrito-de-compras-png_ai2lyw.jpg" alt="Imágen del Carrito" />
            {
              cantidadTotal > 0 &&  <strong>  {cantidadTotal} </strong>
            }
        </Link>        
    </div>
  )
}

export default CartWidget