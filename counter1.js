let count=0;
let total1=0;
let countEl= document.getElementById("count-el");

function increment() {
  // document.getElementById("count-el");
   count=count+1;
 countEl.innerHTML=count;
 total1 +=count;
   
}
 let countt=document.getElementById("save-El");
function save()
{
    let str=count+" - ";
   
    countt.innerText += "  "+str;
    console.log(countt);
     countEl.innerHTML=0;
     count=0;
    
}
let totall=document.getElementById("total-el");
function total()
{
   
    totall.innerHTML =""+total1;
}
let welcme=document.getElementById("welcome");
let name="charan ";
let greeting="good afternoon";
welcme.innerHTML=name + greeting;
console.log(welcme.innerHTML);
