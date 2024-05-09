daynumber = new Date().getDay();
currentTimehour =new Date().getHours();
currentTimeMinute =new Date().getMinutes();
currentTimeSecond =new Date().getSeconds();
daynumber = new Date().getDay();


//day array
var day=["Sunday", "monday","Tuesday", "Wednesay","thrusday","friday","saturday"]
   
console.log("Today is:",[day[daynumber]]);
postfix=( currentTimehour<12) ? "AM":"PM";
currentTimehour=( currentTimehour>=12) ?currentTimehour-12:currentTimehour;
if(currentTimehour===0 )
    { currentTimehour= 12;
        postfix="PM";
    }
    else if(currentTimehour===12 && currentTimeMinute===0&&currentTimeSecond===0)
        {
            postfix="AM";
        }
    
console.log("current time is", currentTimehour,":",currentTimeMinute,":",currentTimeSecond, postfix);//answer
