const computer=document.querySelector('.computer')
const paint=document.querySelector('.paint')
const roger=document.querySelector('.rogerVideo')
const IEBug=document.querySelector('.IEBug')
const demin=document.querySelector('.demin')
const notepad=document.querySelector('.notepad')

const closePaint=document.querySelector("#closePaint")
const closeComputer=document.querySelector("#closeComputer")
const closeRoger=document.querySelector('#closeRoger')
const closeIE=document.querySelector('#closeIE')
const closeDemin=document.querySelector('#closeDemineur')
const closeNote=document.querySelector('#closeNotepad')

const logopaint=document.querySelector('.paintlog')
const logoComputer=document.querySelector("#logoComputer")
const IENotification=document.querySelector('.IENotification')
const logoIE=document.querySelector('#logoIE')
const logoDemin=document.querySelector('.logoDemineur')
const logoNotepad=document.querySelector("#logoNotepad")




logoComputer.addEventListener("click",function(){
  computer.style.display="block"  
})
closeComputer.addEventListener('click',function(){
    computer.style.display='none'
})

logoNotepad.addEventListener("click",function(){
  notepad.style.display="block"  
})
closeNote.addEventListener('click',function(){
    notepad.style.display='none'
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


logoDemin.addEventListener("click",function(){
  demin.style.display="block"  
})
closeDemin.addEventListener('click',function(){
    demin.style.display='none'
})
