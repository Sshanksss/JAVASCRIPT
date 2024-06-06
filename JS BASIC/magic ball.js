let userName='';

// Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.
userName ? console.log(`Hello${userName}`):console.log('Hello!')
const userQuestion='will i be billionaire or millionaire one day ';
console.log(userQuestion);
var randomNumber=Math.floor(Math.random()*8);
console.log(randomNumber);
// sixth
let eightBall='';
// seventh
if(randomNumber==0){
    console.log('it is certain');
}
else if(randomNumber==1){
    console.log('It is decidly so');
}
else if(randomNumber==2){
    console.log('reply hazy try again');
}
else if(randomNumber==3){
    console.log('cannot predict now');
}
else if(randomNumber==4){
    console.log('do not count on it');
}
else if(randomNumber==5){
    console.log('my sources say no');
}
else if(randomNumber==6){
    console.log('outlook not so good');
}
else{
    console.log('signs point to yess');
}