let hr =0;
let min =0;
let sec =0;
let mili =0;

let timer = false

function start() {
  timer=true
  stopwatch();
  
}
function stop() {
  timer=false
  
}

function reset() {
  timer=false
 
  hr=0;
  min=0;
  sec=0;
  mili=0;
  document.getElementById("msec").innerHTML="00"
  document.getElementById("sec").innerHTML="00"
  document.getElementById("min").innerHTML="00"
  document.getElementById("hr").innerHTML="00"
  

}

function stopwatch() {
  if (timer==true) {
    mili=mili+1;
    if (mili==100) {
    
      mili=0;
      sec =sec+1;
      
    }
    if (sec==60) {
          min=min+1;
          sec=0;
          
          }
          if (min==60) {
            min=0
            hr=hr+1
            
          }
         let hrstring=hr;
         let minstring=min;
         let secstring=sec;
          if (sec<10) {
            secstring="0"+sec
            
          }
          if (min<10) {
            minstring="0"+min
            
          }
          if (hr<10) {
            hrstring="0"+hr
            
          }
            
            
          
          
          document.getElementById("msec").innerHTML=mili
          document.getElementById("sec").innerHTML=secstring
          document.getElementById("min").innerHTML=minstring
          document.getElementById("hr").innerHTML=hrstring
    setTimeout( "stopwatch()", 10)
       
     
  }
  
}