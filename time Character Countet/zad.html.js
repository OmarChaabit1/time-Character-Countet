const textareaO =document.getElementById("textarea");
const totalCounterO 
= document.getElementById("total-Counter");
const finalCounterO
= document.getElementById("final-Counter");
textareaO.addEventListener("keyup",()=>{
   // observation  console.log("key is pressed "); 
    updateCounter();

});
function updateCounter(){
//khasna element li fih 30 characters  dojnc khas n3tiwha id l (p1)
totalCounterO.innerText =  textareaO.value.length; 
finalCounterO.innerText = 50 -  textareaO.value.length; 
}