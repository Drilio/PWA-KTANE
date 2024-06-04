import battery from '../assets/battery-full-solid.svg';

interface IBatteryProps {
    howMany: number;
}
export const Battery = ({howMany}:IBatteryProps) => {
    return(
        <div style={{height:'50px',width:'50px'}}>
            <img src={battery} alt="Battery logo" style={{transform:'rotate(-90deg)'}}/>
            <p>&gt;{howMany}</p>
        </div>
    )
}
