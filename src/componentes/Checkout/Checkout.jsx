import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collectio, addDoc } from "firebase/firestore"
import './Checkout.css';
//Cuando se genere la orden de compra se limpia el carrito 
const Checkout = () => {
    const {carrito, vaciarCarrito, cantidadTotal} = useContext(CarritoContext);

//Trabajaremos con el formulario
const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [telefono, setTelefono] = useState("");
//Ambos email es para confirmar que ambos correos estan escritos de manera igual sin diferencias 
const [email, setEmail] = useState("");
const [emailConfim, setEmailConfirm] = useState("");
//El error nos avisa que algo fallo y lo capturamos para guardarlo en un estado 
const [error, setError] = useState("");
const [ordenId, setOrdenId] = useState("");
//Y por ultimo con algun comentario que desee ingresar nuestro usuario
const [comentario, setComentario] = useState("");



  return (
    <div>
<h2>Verificamos tu compra</h2>
<form>
    {carrito.map(producto => (
        <div key={producto.item.id}>
            <p>
                {producto.item.nombre} x {producto.cantidad}
            </p>
<p>Precio: $ {producto.item.precio}</p>
        </div>
    ))}
    <hr />
    <hr />
//Aqui creamos lo visual 

<div className="form-group">
    <label htmlFor="">Nombre </label>
    <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
</div>

<div className="form-group">
    <label htmlFor="">Apellido</label>
    <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)}/>
</div>

<div className="form-group">
    <label htmlFor="">Telefono</label>
    <input type="text" value={telefono} onChange={(e)=> setTelefono(e.target.value)}/>
</div>

<div className="form-group">
    <label htmlFor="">Email</label>
    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
</div>

<div className="form-group">
    <label htmlFor="">Confirmacion de email</label>
    <input type="text" value={emailConfim} onChange={(e)=> setEmailConfirm(e.target.value)}/>
</div>

<div className="form-group">
    <label htmlFor="">Comentario</label>
    <input type="text" value={comentario} onChange={(e)=> setComentario(e.target.value)}/>
</div>


</form>

    </div>
  )
}

export default Checkout