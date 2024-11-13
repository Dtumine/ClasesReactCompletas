import { useState } from "react"


const Contador = () => {

const [contador, setContador] = useState(0);  

const sumar = () => {
 setContador(contador + 1)
} 

const restar = () => {
    setContador(contador - 1)
   }

return(
    <div>
        
        <h2 className="text-white">Total Likes:{contador}</h2> 
        <button className="bg-blue-500" onClick={sumar}>Sumar</button> 
        <button className="bg-blue-500 ml-8" onClick={restar}>Restar</button>

    </div>
)

} 

export default Contador;
