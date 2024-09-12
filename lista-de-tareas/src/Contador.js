import { useState  } from "react"; 
import './contador.css'; 



export default function Contador() { 
    const[contador,setContador] = useState(0); 

    return( 
        <div> 
            <h1 className="contadorCaja">{contador}</h1>
            <button onClick={() => setContador(contador + 1)}>SUMAR</button>
            <button onClick={() => setContador(contador - 1)}>RESTAR</button>
            <button onClick={() => setContador(0)}  >RESETEAR</button>
        </div>
        
    )

} 

