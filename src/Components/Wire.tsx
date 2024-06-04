import {Strip} from "./Strip.tsx";
import {WIRE_COLOR} from "../utils.ts";
interface IWire {
    content:string
    color:string
    handleWireColor:(color:string)=>void,
}
export const Wire = ({content,color,handleWireColor}:IWire) =>{
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: '10px',
            alignItems: "center",
            justifyContent: "center"
        }}>
            <p>{content}</p>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: '10px',
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Strip color={color}/>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: '10px',
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <button onClick={() => handleWireColor(WIRE_COLOR.blue)}
                            style={{backgroundColor: 'blue', color: 'white'}}>BLEU
                    </button>
                    <button onClick={() => handleWireColor(WIRE_COLOR.red)}
                            style={{backgroundColor: 'red', color: 'white'}}>ROUGE
                    </button>
                    <button onClick={() => handleWireColor(WIRE_COLOR.black)}
                            style={{backgroundColor: 'black', color: 'white'}}>NOIR
                    </button>
                    <button onClick={() => handleWireColor(WIRE_COLOR.white)}
                            style={{backgroundColor: 'white', color: 'black'}}>BLANC
                    </button>
                    <button onClick={() => handleWireColor(WIRE_COLOR.yellow)}
                            style={{backgroundColor: 'yellow', color: 'black'}}>JAUNE
                    </button>
                </div>
            </div>
        </div>

    )
}
