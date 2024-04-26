"use strict"

let currentHour = 20;
let greeting = " ";
if(currentHour <=10){
greeting = "good morning";
}else if (currentHour >= 10 && currentHour < 17){
greeting = "good afternoon";
}else{
greeting = "good evening";
}

console.log(greeting);