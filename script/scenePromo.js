const rellax = new Rellax('.rellax');



const quote = document.querySelector("#YOLO")

const superpoze = new Scene({
        "#decay": {
            0: {
                display: "block",
                width: "36%",

            },
            0.1: {
                display: "none",
                width: "36%",

            },
            1.1: {
                display: "block",
                width: "46%",


            },
            1.4: {
                display: "none",
                width: "46%",

            },

            1.5: {
                display: "none",
                width: "36%",

            },


        },

        "#decay2": {
            0.3: {
                display: "block",
                top: '180px',
            },
            0.7: {
                display: "none",
                top: '180px',

            },
            1.3: {
                display: "block",
                top: '280px',
            },
            1.5: {
                display: "none",

            },
            1.7: {
                display: "block",
            },
            1.8: {
                display: "none",
                top: '280px',
            },
            2: {
                display: "block",
                top: '180px',
            },
            2.1: {
                display: "none",
                top: '180px',
            },


        },
    },

    {
        selector: true,
        easing: "ease-in",
        iterationCount: "infinite",

    }).play()




const changeColor = new Scene({
    "#YOLO": {
        0: {
            color: "rgb(223, 181, 181)"
        },
        0.1: {
            color: "rgb(11, 43, 131)"
        },
        0.3: {
            color: "rgb(209, 2, 216)"
        },
        0.5: {
            color: "rgb(49, 134, 34)"
        },
        0.8: {
            color: "rgb(206, 96, 22)"
        },
        1: {
            color: "rgb(255, 255, 255)"
        },


    }
}, {
    selector: true,
    easing: "ease",
});
quote.addEventListener("mouseover", function () {
    changeColor.play()
})



const x = new Scene({
    "#littleS": {
        0: {
            "text-shadow": "rgba(255, 0, 0, 1) 0px 0px 70px",
        },
        0.7: {
            "text-shadow": "rgba(255, 0, 0, 0.613) 0px 5px 10px",
        },
        1.5: {
            "text-shadow": "rgba(255, 0, 0, 1) 0px 0px 70px",
        },



    }
}, {
    selector: true,
    easing: "ease",
    iterationCount:"infinite",
}).play();



const won=document.querySelector('#true')
const loose=document.querySelector("#wrong")
const code=document.querySelector('#codex')
const check=document.querySelector('.checkWin')
let val


const youWon=new Scene({
    "#true":{
        0:{display:"none",},
        0.1:{display:'flex',},
        1.1:{display:'none',},

    },
},{
    selector: true,
    easing: "ease",
})
const youLoose=new Scene({
    "#wrong":{
        0:{display:"none",},
        0.1:{display:'flex',},
        1.1:{display:'none',},

    },
},{
    selector: true,
    easing: "ease",
})


check.addEventListener('click',function(){
    let val=code.value
    if(val==1113){
        youWon.play();
    }
    else{
        youLoose.play()
    }

})