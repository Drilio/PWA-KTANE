interface Istrip{
    color:string
}
export const Strip=({color}:Istrip)=>{
    return(
        <div style={{border:'solid black',width:'10px', height:'100px', backgroundColor: color}}>
        </div>
    )
}
