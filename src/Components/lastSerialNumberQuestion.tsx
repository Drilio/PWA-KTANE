interface ILastSerialNumberQuestion {
    handleLastSerialNumber:(bool:boolean)=>void;
}
export const LastSerialNumberQuestion = ({handleLastSerialNumber}:ILastSerialNumberQuestion)=>{
    return (
        <div style={{display: "flex", flexDirection: 'column', gap: '10px'}}>
            <label>le dernier chiffre du numéro de série est pair ? </label>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center'}}>
                <button onClick={() => handleLastSerialNumber(true)}>oui</button>
                <button onClick={() => handleLastSerialNumber(false)}>non</button>
            </div>
        </div>
    )
}
