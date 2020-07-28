"use strict"
let name = 'Bryan Brown';
let age = 28;
let birthday = 'October 8th';
let detroitGC = true;
let lifeEvents=["I graduated from Central in 2014", "I lived in Charlotte, NC for 4 years", "I taught 7th grade Social Studies", "I worked at Quicken Loans for 2 years"];
if (detroitGC === true){
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
} else if (detroitGC === false){
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`)
}
for(let i=0; i <lifeEvents.length; i++){
    console.log(lifeEvents[i])
}
let counter=0;
while(true){
    let randomNumber= Math.floor(Math.random()*10+1);
    console.log(randomNumber);
if(randomNumber !==5){
    counter++;
    console.log(`${randomNumber}!==5`);
}else{
    counter++;
    console.log(`5===5. It took ${counter} iterations to randomly generate the number 5.`);
    break;
}
}

let hours=50;
let wage =10;

if(hours <=40){
    let paycheck = hours*wage;
    let weeks = 1000000/paycheck;
    console.log(`With wage=${wage} and hours=${hours} it would take ${weeks} weeks.`);
}else {
    let overtime= (hours-40)*(wage*1.5);
    let paycheck=40*wage+overtime;
    let weeks=Math.ceil(1000000/paycheck);
    console.log(`With wage=${wage} and hours=${hours} it would take ${weeks} weeks.`);
}
