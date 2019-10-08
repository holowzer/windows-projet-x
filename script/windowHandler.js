const computer=document.querySelector('.computer')
const notepad=document.querySelector('.notepad')
const paint=document.querySelector('.paint')

const closeComputer=document.querySelector("#closeComputer")
const logoComputer=document.querySelector("#logoComputer")

logoComputer.addEventListener("click",function(){
  computer.style.display="block"  
})
closeComputer.addEventListener('click',function(){
    computer.style.display='none'
})