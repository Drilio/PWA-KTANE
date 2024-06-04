interface Istrip{
    color:string
}
export const Strip=({color}:Istrip)=>{
    return(
        <div style={{width:'10px', height:'100px', backgroundColor: color}}>
        </div>
    )
}
