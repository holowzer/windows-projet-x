const cursor=document.querySelector('#cursor')
const computer=document.querySelector("#computer")


computer.addEventListener('mouseover',function(){
    cursor.setAttribute("style", "border:2px solid rgb(255, 136, 0);")})


document.addEventListener('mousemove',e=>{
    cursor.setAttribute("style","top:"+(e.pageY-15)+"px; left:"+(e.pageX-15)+"px;")
})


