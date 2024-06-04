import {NavBar} from "../../Components/NavBar.tsx";
import {useCallback, useState} from "react";
import './moduleWire.css';
import {Wire} from "../../Components/Wire.tsx";

export const ModuleWire = ()=>{
    const [nbrWire, setNbrWire] = useState(0)
    const [firstWireColor, setfirstWireColor] = useState('')

    const handleNmbrWire = useCallback((nbrWire: number) => {
        setNbrWire(nbrWire);
    },[])

    const handleFirstWireColor= useCallback((color:string)=>{
        setfirstWireColor(color)
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
            {nbrWire === 3 && (
                <div>
                    <p>De quel couleur sont les fils ?</p>
                    <div style={{display: "flex", justifyContent:'center', flexDirection: "column",gap: '10px'}}>
                        <Wire content={'first wire'} color={firstWireColor} handleWireColor={handleFirstWireColor}/>
                    </div>
                </div>
            )}
        </>
    )
}
