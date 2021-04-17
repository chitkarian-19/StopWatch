var seconds=0;
var intervalId=0;
 var cnt=0;
document.getElementById("stop").disabled=true;
/*Set the styling */
var lap_btn = document.getElementById("lap");
var stop_btn = document.getElementById("stop");

function appendListIem(value){
   var parent=document.getElementById("lapList");
   

   var divChild = document.createElement("div");

   divChild.innerHTML="<span class=\"lapLeft\">"+"Lap"+cnt+"</span>"+"<span class=\"lapNum\">"+value+"</span><br><hr />";
  
   parent.appendChild(divChild);
   
}

function start(){
   cnt++;
  var hours;
  var mins;
  var secs;
document.getElementById("stop").disabled=false;
document.getElementById("lap").disabled=true;  
document.getElementById("time").innerText="00:00:00";

intervalId = setInterval(()=>{
     hours=parseInt((seconds/3600)%24);
     mins=parseInt((seconds/60)%60);
     secs=seconds%60;
     seconds++;
    var hoursT=hours;
    if(hours<=9){
        hoursT="0"+hoursT;
    }
    var minsT=mins;
    if(mins<=9){
        minsT="0"+minsT;
    }
    var secsT=secs;
    if(secs<=9){
        secsT="0"+secsT;
    }

document.getElementById("time").innerText=hoursT+":"+minsT+":"+secsT;

  },1000);

/*Set the styling on stop button and remove it from lap button */
lap_btn.style.backgroundColor="gray";
lap_btn.style.color="black";

stop_btn.style.backgroundColor="rgba(133, 51, 51, 0.9)";
stop_btn.style.color="red";
     







}
function stop(){
   clearInterval(intervalId);
   seconds=0;

document.getElementById("stop").disabled=true;
document.getElementById("lap").disabled=false; 
lap_btn.style.backgroundColor="rgba(133, 51, 51, 0.9)";
lap_btn.style.color="red";
stop_btn.style.backgroundColor="gray";
stop_btn.style.color="black";
appendListIem(document.getElementById("time").innerText);
}


