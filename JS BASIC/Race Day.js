let racenumber=Math.floor(Math.random()*1000);
let isregistered=true;
let runnerage=18;
if(runnerage>18 && isregistered){
    console.log(racenumber+1000);
}
if(runnerage>18&&isregistered){
    console.log('U will race at 9:30am',racenumber);
}
else if(runnerage>18&&!isregistered){
    console.log('U will race at 11:00am',racenumber);
}
else if(runnerage<18){
    console.log(`Youth registrants run at 12:30 pm ur race number is  ${racenumber}`);
}
else if(runnerage === 18) {
    console.log('Runner should enquire at the registration desk');
  }
  else{
    console.log('dont run');
  }
  