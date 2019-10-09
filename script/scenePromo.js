
const rellax=new Rellax('.rellax');



const quote=document.querySelector("#YOLO")

const superpoze = new Scene({
    "#decay":{
        0:{
            display:"block",
            width: "36%",

        },
        0.1:{
            display:"none",
            width: "36%",

        },
        1.1:{
            display:"block",
            width: "46%",

           
        },
        1.4:{
            display:"none",
            width: "46%",

        },

        1.5:{
            display:"none",
            width: "36%",

        },


    },

"#decay2":{
    0.3:{
        display:"block",
        top:'180px',
    },
    0.7:{
        display:"none",
        top:'180px',
        
    },
    1.3:{
        display:"block",
        top:'280px',
    },
    1.5:{
        display:"none",
       
    },
    1.7:{
        display:"block",
    },
    1.8:{
        display:"none",
        top:'280px',
    },
    2:{
        display:"block",
        top:'180px',
    },
    2.1:{
        display:"none",
        top:'180px',
    },


},
},

{
        selector: true,
        easing: "ease-in",
        iterationCount:"infinite",
    
}).play()




  const changeColor=new Scene({
      "#YOLO":{
          0:{
            color:"rgb(223, 181, 181)"
          },
          0.1:{
            color:"rgb(11, 43, 131)"
          },
          0.3:{
            color:"rgb(209, 2, 216)"
          },
          0.5:{
            color:"rgb(49, 134, 34)"
          },
          0.8:{
            color:"rgb(206, 96, 22)"
          },
          1:{
            color:"rgb(255, 255, 255)"
          },


      }
  },{
    selector: true,
    easing: "ease",
  });
  quote.addEventListener("mouseover",function(){
      changeColor.play()
  })