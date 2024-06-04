import {NavBar} from "../../Components/NavBar.tsx";
import {useCallback, useState} from "react";
import './moduleWire.css';

export const ModuleWire = ()=>{
    const [nbrWire, setNbrWire] = useState(0)

    const handleNmbrWire = useCallback((nbrWire: number) => {
        setNbrWire(nbrWire);
    },[])
    return(
        <>
            <NavBar/>
            <div>
                <p>Combien de fil y a t-il ?</p>
                <div className='button-nbrwire-container'>
                    <button onClick={()=>handleNmbrWire(3)}>3</button>
                    <button onClick={()=>handleNmbrWire(4)}>4</button>
                    <button onClick={()=>handleNmbrWire(5)}>5</button>
                    <button onClick={()=>handleNmbrWire(6)}>6</button>
                </div>
            </div>
            {nbrWire === 1 && (
                <>
                </>
            )}
        </>
    )
}
