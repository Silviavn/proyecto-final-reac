import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {

    const funcion = idCategoria ? getProductosPorCategoria : getProductos;
    funcion(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))

  }, [idCategoria])


  return (
    <>
      <h2 style={{ color: "blue", textAlign: "center" }}> Nuestros Productos </h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer