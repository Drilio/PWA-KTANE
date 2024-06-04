import './Button.css';

interface IButtonProps {
    content:string,
    color:string,
    handleClick:()=>void,
}
export const Button = ({content, color,handleClick}:IButtonProps)=>{
    return(
        <button onClick={handleClick} className='button' style={{backgroundColor:color}}>
            {content}
        </button>
    )
}
