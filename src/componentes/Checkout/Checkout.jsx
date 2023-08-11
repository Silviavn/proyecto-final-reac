import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collectio, addDoc, collection } from "firebase/firestore"
import './Checkout.css';
//Cuando se genere la orden de compra se limpia el carrito 
const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

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

    //Funciones y validaciones

    const manejadorFormulario = (event) => {
        event.preventDefault();
    }
    //Campos de texto esten completos menos el de comentario que es opcional

    if (!nombre || !apellido || !telefono || !email || !emailConfim) {
        setError("Por favor complete todos los campos requeridos");
        return;
    }

    //Ahora verificamos que los campos de email esten exactamente iguales

    if (email !== emailConfim) {
        setError("Los email ingresados no estan iguales porfavor verifique que esten correctos");
        return;
    }
    //Creamos el objeto de la orden

    const orden = {
        items: carrito.map(producto => ({
            id: producto.item.id,
            nombre: producto.item.nombre,
            cantidad: producto.cantidad
        })),
        total: total,
        nombre,
        apellido,
        telefono,
        email,
        fecha: new Date(),
    }
    //Guardamos la orden en la base de datos y le pasamos addDocs y la collection con su respectivo nombre de donde sacaremos los datos

    addDoc(collection(db, "ordenes"), orden)
        .then(docRef => {
            setOrdenId(docRef.id);
            vaciarCarrito();
        })
        .catch(error => {
            console.log("Error al crear su orden", error);
            setError("Se produjo un error al crear la orden de la compra, porfavor vuelva pronto")
        })


    return (
        <div>
            <h2>Verificamos tu compra</h2>
            <form onSubmit={manejadorFormulario} className="formulario">
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
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Confirmacion de email</label>
                    <input type="text" value={emailConfim} onChange={(e) => setEmailConfirm(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Deje un comentario opcional</label>
                    <input type="text" value={comentario} onChange={(e) => setComentario(e.target.value)} />
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Finalizar compra</button>

            </form>
            {
                ordenId && (
                    <strong>¡Muchas gracias por su compra! Su numero de orden es {ordenId}</strong>
                )
            }
        </div>
    )
}

export default Checkout