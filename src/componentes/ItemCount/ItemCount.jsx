 import { useState } from "react"

const ItemCount = () => {
    const [contador, setContador] = useState(1)
    const incrementar = () => {
        if(contador < 5) {
            setContador(contador + 1);
        }
    } 

    const decrementar = () => {
        if(contador > 1) {
            setContador(contador - 1);
        }
    }
  return (
    <div>
        <button onClick={decrementar}> - </button>
        <p> {contador} </p>
        <button onClick={incrementar}> + </button>
    </div>
  )
}


export default ItemCount