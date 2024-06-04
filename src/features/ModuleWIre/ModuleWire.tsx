import {NavBar} from "../../Components/NavBar.tsx";
import {useCallback, useState} from "react";
import './moduleWire.css';
import {Wire} from "../../Components/Wire.tsx";
import {witchWireToCut} from "./wireToCut.ts";
import {WIRE_COLOR} from "../../utils.ts";

export const ModuleWire = ()=>{
    const [nbrWire, setNbrWire] = useState(0)
    const [firstWireColor, setFirstWireColor] = useState(WIRE_COLOR.white)
    const [secondWireColor, setSecondWireColor] = useState(WIRE_COLOR.white)
    const [thirdWireColor, setThirdWireColor] = useState(WIRE_COLOR.white)
    const [fourthWireColor, setFourthWireColor] = useState(WIRE_COLOR.white)
    const [fithWireColor, setFithWireColor] = useState(WIRE_COLOR.white)
    const [sixthWireColor, setSixthWireColor] = useState(WIRE_COLOR.white)
    const [wireToCut, setWireToCut] = useState<undefined | number>(undefined)
    const [lastSerialNumberIsPair, setLastSerialNumberIsPair] = useState(false)

    const handleNmbrWire = useCallback((nbrWire: number) => {
        setWireToCut(undefined)
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

    const handleWitchWireToCut = (wires:string[])=>{
        const wire = witchWireToCut(wires,lastSerialNumberIsPair)
        console.log(wire)
        setWireToCut(wire)
    }

    const handleLastSerialNumber = (bool:boolean)=>{
        setLastSerialNumberIsPair(bool)
    }
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
                            <button onClick={()=>handleWitchWireToCut([firstWireColor,secondWireColor,thirdWireColor])}>Valider</button>
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
                        <div style={{display:"flex", flexDirection:'column', gap: '10px'}}>
                            <label>le dernier chiffre du numéro de série est pair ? </label>
                            <div style={{ display:'flex',gap:'10px', alignItems:'center', justifyContent:'center'}}>
                                <button onClick={()=>handleLastSerialNumber(true)}>oui</button>
                                <button onClick={()=>handleLastSerialNumber(false)}>non</button>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>handleWitchWireToCut([firstWireColor,secondWireColor,thirdWireColor,fourthWireColor])}>Valider</button>
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
            {wireToCut && wireToCut > 1 && (
                <p> le fil qu'il faut couper est le {wireToCut}ème !!!</p>
            )}
            {
                wireToCut && wireToCut === 1 && (
                    <p> le fil qu'il faut couper est le premier !!!!</p>
                )
            }
        </>
    )
}
