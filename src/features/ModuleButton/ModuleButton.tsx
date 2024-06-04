import {Button} from "../../Components/Button.tsx";
import {BUTTON_COLOR, BUTTON_TEXT, STRIP_COLOR} from "./utils.ts";
import './modeButton.css'
import {Battery} from "../../Components/Battery.tsx";
import {useCallback, useState} from "react";
import {Strip} from "../../Components/Strip.tsx";
import {NavBar} from "../../Components/NavBar.tsx";

export const ModuleButton = ()=>{
    const [simpleClick,setsimpleClick,] = useState(false);
    const [otherClick,setotherClick] = useState(false);
    const [blueStrip, setBlueStrip]= useState(false);
    const [yellowStrip, setYellowStrip]= useState(false);
    const [otherStrip ,setOtherStrip ] = useState(false);

    const handlesimpleClick = useCallback(()=>{
        setsimpleClick(true)
        setotherClick(false)
    },[simpleClick])

    const handleOtherClick = useCallback(()=>{
        setotherClick(true)
        setsimpleClick(false)
    },[])

    const handleBlueStrip = useCallback(()=>{
        setBlueStrip(true)
        setYellowStrip(false)
        setOtherStrip(false)
    },[])

    const handleYellowStrip = useCallback(()=>{
        setBlueStrip(false)
        setYellowStrip(true)
        setOtherStrip(false)
    },[])

    const handleOtherStrip = useCallback(()=>{
        setBlueStrip(false)
        setYellowStrip(false)
        setOtherStrip(true)
    },[])

    return(
        <>
            <NavBar/>
            <div>
                <h2>Choisissez vote cas</h2>
                <div className='first-choice-content'>
                    <div className="red-button">
                        <Button content={BUTTON_TEXT.hold} color={BUTTON_COLOR.red} handleClick={handlesimpleClick}/>
                    </div>
                    <button onClick={handlesimpleClick} className="battery">
                        <Battery howMany={1}/>
                        + CAR
                    </button>
                    <button onClick={handlesimpleClick} className="battery">
                        <Battery howMany={2}/>
                        + FRK ALLUME
                    </button>
                    <button onClick={handleOtherClick}>
                        AUTRE
                    </button>
                </div>
                {
                    simpleClick &&(
                        <div>
                            <p>CLICK ET RELACHE LE BOUTON TOUT DE SUITE !</p>
                        </div>
                    )
                }
                {
                    otherClick && (
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div>
                                <p>CLICK ET RESTE APPUYER SUR LE BOUTON PUIS...</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", gap:'30px'}}>
                                <button onClick={handleBlueStrip}>
                                    <Strip color={STRIP_COLOR.blue}/>
                                </button>
                                <button onClick={handleYellowStrip}>
                                    <Strip color={STRIP_COLOR.yellow}/>
                                </button>
                                <button onClick={handleOtherStrip}>AUTRE</button>
                            </div>
                        </div>
                    )
                }
                {
                    blueStrip && (
                        <>
                            <p>RELACHE LORSQUE LE COMPTE A REBOURS AFFICHE 4 N'IMPORTE OU !!!</p>
                        </>
                    )
                }
                {
                    yellowStrip && (
                        <>
                            <p>RELACHE LORSQUE LE COMPTE A REBOURS AFFICHE 5 N'IMPORTE OU !!!</p>
                        </>
                    )
                }
                {
                    otherStrip && (
                        <>
                            <p>RELACHE LORSQUE LE COMPTE A REBOURS AFFICHE 1 N'IMPORTE OU !!!</p>
                        </>
                    )
                }
            </div>
        </>
    )
}
