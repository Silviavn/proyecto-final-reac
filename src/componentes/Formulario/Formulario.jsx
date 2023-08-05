import { useState } from "react";
import { db } from "../services/config";
import { collection, addDoc } from "firebase/firestore";
//Campos de formulario
const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    //Creamos la funcion que maneja nuestro evento de formulario
    const controlFormulario = (event) => {
        event.preventDefault();
//addDoc es una funcion que nos permite agregar un documento a mi coleccion
        addDoc(collection(db, "clientes"), {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        })
        setNombre("")
        setApellido("")
        setTelefono("")
    }

  return (
    <form onSubmit={controlFormulario}>
        <h2>Formulario de contacto</h2>

        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre}/>

        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} value={apellido}/>


        <label htmlFor="telefono">Telefono</label>
        <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>

<button type="submit"> Enviar datos </button>


    </form>
  )
}

export default Formulario