//the user should be able to choose b/w rock paper and scissor using const and arrow func create a function named getuserchoice that takes a single parameter userinput
const getuserchoice=userinput=>{
    userinput=userinput.toLowerCase();
    if(userinput==='rock'||userinput=='paper'||userinput==='scissor'){
        return userinput;
    }
    else{
        console.log('u r wrong');
    }
}
 //console.log(getuserchoice('fork'));
//STEP 5
const getcomputerchoice=()=>{
    const randomnumber=(Math.floor(Math.random()*3));
    switch(randomnumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor'
    }   
};
// console.log(getcomputerchoice());
// console.log(getcomputerchoice());
// console.log(getcomputerchoice());
const determinewinner=(userchoice,computerchoice)=>{
if(userchoice===computerchoice){
    return 'This game was  a tie'
}
if(userchoice==='rock'){
    if(computerchoice==='paper'){
        return 'computer won';
    }
    else{
        return 'congo u won';
    }
}
if(userchoice==='paper'){
    if(computerchoice==='scissor'){
        return 'u lost';
    }
    else{
        return 'u won!';
    }
    }
    if(userchoice==='scissor'){
        if(computerchoice==='rock'){
            return 'u won!';}
        else{
            return 'u lost';
        }
        }
    
};
// console.log(determinewinner('rock','scissor'));
const playgame=()=>{
    const userchoice=getuserchoice('paper');
    const computerchoice=getcomputerchoice();
    console.log(`you threw ${userchoice}`);
    console.log(`computer threw ${computerchoice}`);

    console.log(determinewinner(userchoice,computerchoice));
};
playgame()