import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
//las peticiones son por get doc
import {getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect( ()=> {
    const nuevoDoc = doc(db, "productos", idItem);
    getDoc(nuevoDoc)
    .then(res => {
      const data = res.data();
      const nuevosProducto = {id: res.id, ...data}
      setProducto(nuevosProducto);
    })
    .catch(error => console.log(error))
    //Cada vez que cambie el usuario le dara un nuevo resultado de informacion
  }, [idItem])

  
  return producto? (
    <div>
      <ItemDetail {...producto} />
    </div>
  ) : null
}

export default ItemDetailContainer