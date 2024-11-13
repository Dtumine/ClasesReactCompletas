
import { useEffect, useState } from "react"; 

function Main(props) { 

    const [teclas, setTeclas] = useState([]); 

    useEffect( () => { 
      function onkeypress(event){ 
         
         setTeclas([...teclas, event.keyCode])
      }
      
      window.addEventListener('keypress', onkeypress)

    });

    

    return(

        <div>
            <h2 className="text-white">Hook UseEffect</h2> 

            <ul>
                {teclas.map(tecla =>(
                    <li className="text-white">{teclas}</li>
                ))}
                
            </ul>

   
        </div>
    )
}



export default Main; 
