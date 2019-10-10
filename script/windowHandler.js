const computer=document.querySelector('.computer')
const paint=document.querySelector('.paint')
const roger=document.querySelector('.rogerVideo')
const IEBug=document.querySelector('.IEBug')

const closePaint=document.querySelector("#closePaint")
const closeComputer=document.querySelector("#closeComputer")
const closeRoger=document.querySelector('#closeRoger')
const closeIE=document.querySelector('#closeIE')

const logopaint=document.querySelector('.paintlog')
const logoComputer=document.querySelector("#logoComputer")
const IENotification=document.querySelector('.IENotification')
const logoIE=document.querySelector('#logoIE')






logoComputer.addEventListener("click",function(){
  computer.style.display="block"  
})
closeComputer.addEventListener('click',function(){
    computer.style.display='none'
})



logopaint.addEventListener("click",function(){
  paint.style.display="block"  
})
closePaint.addEventListener('click',function(){
    paint.style.display='none'
})



IENotification.addEventListener("click",function(){
  roger.style.display="block"  
})
closeRoger.addEventListener('click',function(){
    roger.style.display='none'
})

logoIE.addEventListener("click",function(){
  IEBug.style.display="block"  
})
closeIE.addEventListener('click',function(){
    IEBug.style.display='none'
})
