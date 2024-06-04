import {NavBar} from "../../Components/NavBar.tsx";
import {useCallback, useState} from "react";
import './moduleWire.css';
import {Wire} from "../../Components/Wire.tsx";

export const ModuleWire = ()=>{
    const [nbrWire, setNbrWire] = useState(0)
    const [firstWireColor, setFirstWireColor] = useState('')
    const [secondWireColor, setSecondWireColor] = useState('')
    const [thirdWireColor, setThirdWireColor] = useState('')
    const [fourthWireColor, setFourthWireColor] = useState('')
    const [fithWireColor, setFithWireColor] = useState('')
    const [sixthWireColor, setSixthWireColor] = useState('')

    const handleNmbrWire = useCallback((nbrWire: number) => {
        setNbrWire(nbrWire);
    },[])

    const handleFirstWireColor= useCallback((color:string)=>{
        setFirstWireColor(color)
    },[])

    const handleSecondWireColor= useCallback((color:string)=>{
        setSecondWireColor(color)
    },[])

    const handleThirddWireColor= useCallback((color:string)=>{
        setThirdWireColor(color)
    },[])


    const handleFourthWireColor= useCallback((color:string)=>{
        setFourthWireColor(color)
    },[])

    const handleFithWireColor= useCallback((color:string)=>{
        setFithWireColor(color)
    },[])

    const handleSixthWireColor= useCallback((color:string)=>{
        setSixthWireColor(color)
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
                    <div style={{display: "flex", justifyContent:'center', alignItems:'center', flexDirection: "row",gap: '10px'}}>
                        <Wire content={'first wire'} color={firstWireColor} handleWireColor={handleFirstWireColor}/>
                        <Wire content={'second wire'} color={secondWireColor} handleWireColor={handleSecondWireColor}/>
                        <Wire content={'third wire'} color={thirdWireColor} handleWireColor={handleThirddWireColor}/>
                        <div>
                            <button>Valider</button>
                        </div>
                    </div>
                </div>
            )}
            {nbrWire === 4 && (
                <div>
                    <p>De quel couleur sont les fils ?</p>
                    <div style={{display: "flex", justifyContent:'center', alignItems:'center', flexDirection: "row",gap: '10px'}}>
                        <Wire content={'first wire'} color={firstWireColor} handleWireColor={handleFirstWireColor}/>
                        <Wire content={'second wire'} color={secondWireColor} handleWireColor={handleSecondWireColor}/>
                        <Wire content={'third wire'} color={thirdWireColor} handleWireColor={handleThirddWireColor}/>
                        <Wire content={'fourth wire'} color={fourthWireColor} handleWireColor={handleFourthWireColor}/>
                        <div>
                            <button>Valider</button>
                        </div>
                    </div>
                </div>
            )}
            {nbrWire === 5 && (
                <div>
                    <p>De quel couleur sont les fils ?</p>
                    <div style={{display: "flex", justifyContent:'center', alignItems:'center', flexDirection: "row",gap: '10px'}}>
                        <Wire content={'first wire'} color={firstWireColor} handleWireColor={handleFirstWireColor}/>
                        <Wire content={'second wire'} color={secondWireColor} handleWireColor={handleSecondWireColor}/>
                        <Wire content={'third wire'} color={thirdWireColor} handleWireColor={handleThirddWireColor}/>
                        <Wire content={'fourth wire'} color={fourthWireColor} handleWireColor={handleFourthWireColor}/>
                        <Wire content={'fith wire'} color={fithWireColor} handleWireColor={handleFithWireColor}/>
                        <div>
                            <button>Valider</button>
                        </div>
                    </div>
                </div>
            )}
            {nbrWire === 6 && (
                <div>
                    <p>De quel couleur sont les fils ?</p>
                    <div style={{display: "flex", justifyContent:'center', alignItems:'center', flexDirection: "row",gap: '10px'}}>
                        <Wire content={'first wire'} color={firstWireColor} handleWireColor={handleFirstWireColor}/>
                        <Wire content={'second wire'} color={secondWireColor} handleWireColor={handleSecondWireColor}/>
                        <Wire content={'third wire'} color={thirdWireColor} handleWireColor={handleThirddWireColor}/>
                        <Wire content={'fourth wire'} color={fourthWireColor} handleWireColor={handleFourthWireColor}/>
                        <Wire content={'fith wire'} color={fithWireColor} handleWireColor={handleFithWireColor}/>
                        <Wire content={'sixth wire'} color={sixthWireColor} handleWireColor={handleSixthWireColor}/>
                        <div>
                            <button>Valider</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
