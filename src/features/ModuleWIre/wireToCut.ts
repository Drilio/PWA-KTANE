import {WIRE_COLOR} from "../../utils.ts";

export function witchWireToCut(wires:string[],lastSerialNumberIsPair:boolean):number {
    console.log(wires)
    if(wires.length === 3){
    // no red wire case
    let isAWireRed = false;
    for(let wire of wires){
        if(wire === WIRE_COLOR.red){
            isAWireRed = true;
        }
    }
    if(!isAWireRed){
        console.log('no red wire')
        return 2
    }
        //last wire is white case

        if(wires[2] === WIRE_COLOR.white){
            console.log('last wire is white')
            return 3
        }

        // multiple blue wire case
        let isMultipleBlueWire = 0;
        let lastBlueWireIndex = 0;
        for(let i =0 ; i < wires.length; i++){
            if(wires[i] === WIRE_COLOR.blue){
                isMultipleBlueWire++;
                lastBlueWireIndex = i;
            }
        }
        if( isMultipleBlueWire > 1){
            console.log('plus de 1 fil bleu')
            return lastBlueWireIndex + 1;
        }
        console.log('aucun critère validé')
        return 3;
    }
    if(wires.length === 4){
        //More than one red wire and last number of serial Number is odd
        let redWire = 0;
        for(let wire of wires){
            if(wire === WIRE_COLOR.red){
                redWire++;
            }
        }
        if(redWire > 1 && !lastSerialNumberIsPair){
            return 4
        }
        //last wire is yellow and no red wire
        if(wires[3] === WIRE_COLOR.yellow && redWire === 0){
            return 1
        }
        //exactly one blue wire
        let blueWire = 0;
        for(let wire of wires){
            if(wire === WIRE_COLOR.blue){
                blueWire++;
            }
        }
        if(blueWire === 1 ){
            return 1
        }
        //more than one yellow wire
        let yellowWire = 0;
        for(let wire of wires){
            if(wire === WIRE_COLOR.yellow){
                yellowWire++;
            }
        }
        if(yellowWire > 1 ){
            return 4
        }
        else return 2;

    }
    return 0
}
