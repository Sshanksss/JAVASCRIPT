const getsleephours=(day)=>{
    if(day==='monday'){
        return 8;
    }
    else if(day==='tuesday'){
        return 7;
    }
    else if(day==='wednesday'){
        return 9;
    }
    else if(day==='thursday'){
        return 8;
    }
    else if(day==='friday'){
        return 5;
    }
    else if(day==='saturday'){
        return 6;
    }
    else if(day=='sunday'){
        return 8;
    }
    else{
        return 'enter a valid day'
    }
}
//console.log(getsleephours('march'));
const getactualsleephours=()=>{
    return getsleephours('monday')+getsleephours('tuesday')+getsleephours('wednesday')+getsleephours('thursday')+getsleephours('friday')+getsleephours('saturday')+getsleephours('sunday')
}
//console.log(getactualsleephours());
const getidealsleephours=()=>{
    let idealhours=10;
    return idealhours*7;
    
}
// console.log(getidealsleephours());
const calculatesleepdebt=()=>{
    let actualsleephours=getactualsleephours();
    let idealsleephours=getidealsleephours();

    if(actualsleephours===idealsleephours){
        return 'u got perfect amount of sleep';
    }
    else if(actualsleephours>idealsleephours){
        return 'u got more sleep';    
    }
    else{
        return 'soja';
    }

}
console.log(calculatesleepdebt());