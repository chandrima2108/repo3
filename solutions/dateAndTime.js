daynumber = new Date().getDay();
currentTimeHour =new Date().getHours();
currentTimeMinute =new Date().getMinutes();
currentTimeSecond =new Date().getSeconds();


switch(daynumber){
    case 0: 
    day="Sunday";
    break;
    case 1: 
    day="Monday";
    break;
    case 2: 
    day="Tuesday";
    break;
    case 3: 
    day="Wednesday";
    break;
    case 4: 
    day="Thurday";
    break;
    case 5: 
    day="Friday";
    break;
    case 6: 
    day="Saturday";
    break;
    default: console.log("error")
};
console.log("Today is:",day);
console.log("current time is", currentTimeHour,":",currentTimeMinute,":",currentTimeSecond,"PM");