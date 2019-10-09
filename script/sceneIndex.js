const loadingScene = new Scene({
    ".winXPLoad": {
        0: {
            display: 'block',
            opacity: '1',
        },
        0.8: {
            display: 'block',
            opacity: '1',
        },

        0.85: {
            display: 'block',
            opacity: '0',
        },

        0.9: {
            display: 'block',
            opacity: '1',
        },

        1.3: {
            display: 'block',
            opacity: '1',
        },

        1.35: {
            display: 'block',
            opacity: '0',
        },

        1.4: {
            display: 'block',
            opacity: '1',
        },
        1.7: {
            display: 'block',
            opacity: '1',
        },

        1.75: {
            display: 'block',
            opacity: '0',
        },

        1.8: {
            display: 'block',
            opacity: '1',
        },
        1.9: {
            display: 'block',
            opacity: '1',
        },

        1.95: {
            display: 'block',
            opacity: '0',
        },

        2: {
            display: 'block',
            opacity: '1',
        },


        2.8: {
            opacity: 1,
        },
        2.9: {
            opacity: 0,
        },
        3: {
            opacity: 0,
            display: "none",
        },

    },
    ".Desktop": {
        0: {
            display: 'none',

        },
        2: {

        },
        2.2: {

        },
        3: {

            display: "block",
        },

    },
    "#msn1":{
        6.1:{
            display:"flex",
            bottom: "-150px",
            right: "90px",
        },
        6.5:{
            display:"flex",
            bottom: "50px",
            right: "90px",
        },

        13.5:{
            bottom: "50px",
            right: "90px",
            opacity:1,
        },
        13.7:{
            opacity:0,

        },

        13.9:{
            display:"none",
            bottom: "-150px",
            right: "90px",
            opacity:0,

        },
     
    },
    "#msn2":{
       13.8:{
            display:"flex",
            bottom: "-150px",
            right: "90px",
        },
        14:{
            display:"flex",
            bottom: "50px",
            right: "90px",
        },

        20:{
            bottom: "50px",
            right: "90px",
            opacity:1
        },

     
    },
},
 {
    selector: true,
    easing: "ease-in",
}).play();




const IE=new Scene({
    ".IENotification": {
        0: {
            opacity:0,

        },
       0.2: {

        },
        1.1: {
            opacity:0,

        },
       1.3: {

            opacity:1,
        },
        1.4: {

            "background-color": "rgb(25, 71, 168)",
        },
        1.9: {

            "background-color": "rgba(231, 185, 33, 0.719)",

        },
        2.4: {

            "background-color": "rgb(25, 71, 168)",

        },
        2.9: {

            "background-color": "rgba(231, 185, 33, 0.719)",

        },
        3.4: {

            "background-color": "rgb(25, 71, 168)",

        },
        3.9: {

            "background-color": "rgba(231, 185, 33, 0.719)",

        },
        4.4: {

            "background-color": "rgb(25, 71, 168)",

        },

    },
    "#msn2":{
        0:{
            bottom: "50px",
            right: "90px",
            opacity:1
        },

        1:{
             display:"flex",
             bottom: "-150px",
             right: "90px",
         },

 
 
      
     },
 

},{
    selector: true,
    easing: "ease-in",
});


const vidButton=document.querySelector('.videoTrigger')
vidButton.addEventListener('click',function(){
    IE.play()
})