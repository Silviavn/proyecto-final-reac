import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "@/services/config"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  
//Hacemos las peticiones hacia la base de datos, data toma la informacion del objeto
useEffect( () => {
const misProductos = idCategoria ? query(collection(db, "productos"),where("idCat", "==", idCategoria)) : collection(db, "productos");

getDocs(misProductos)

.then(res => {
  const nuevosProductos = res.docs.map(doc=> {
    const data = doc.data()
    return {id:doc.id, ...data}
  })
  setProductos(nuevosProductos);
})
.catch(error => console.log(error))
// aqui se vigila el estado de la categoria

}, [idCategoria])

  return (
    <>
      <h2 style={{ color: "blue", textAlign: "center" }}> Nuestros Productos </h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer
