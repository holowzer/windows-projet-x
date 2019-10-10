const closeNY = document.querySelector('#closeNY')
const triggerMail = document.querySelector(".triggerMail")

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
    "#msn1": {
        6.1: {
            display: "flex",
            bottom: "-150px",
            right: "90px",
        },
        6.5: {
            display: "flex",
            bottom: "50px",
            right: "90px",
        },

        13.5: {
            bottom: "50px",
            right: "90px",
            opacity: 0.8,
        },
        13.7: {
            opacity: 0,

        },

        13.9: {
            display: "none",
            bottom: "-150px",
            right: "90px",
            opacity: 0,

        },

    },
    "#msn2": {
        13.8: {
            display: "flex",
            bottom: "-150px",
            right: "90px",
        },
        14: {
            display: "flex",
            bottom: "50px",
            right: "90px",
        },

        20: {
            bottom: "50px",
            right: "90px",
            opacity: 0.8,
        },


    },
}, {
    selector: true,
    easing: "ease-in",
}).play();




const IE = new Scene({
    "#IENotification1": {
        0: {
            opacity: 0,

        },
        0.2: {

        },
        1.1: {
            opacity: 0,

        },
        1.3: {

            opacity: 0.8,
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
    "#msn2": {
        0: {
            bottom: "50px",
            right: "90px",
            opacity: 0.8,
        },

        1: {
            display: "flex",
            bottom: "-150px",
            right: "90px",
        },




    },


}, {
    selector: true,
    easing: "ease-in",
});


const vidButton = document.querySelector('.videoTrigger')
vidButton.addEventListener('click', function () {
    IE.play()
})





const Ienotif = document.querySelector('#IENotification1')
Ienotif.addEventListener('click', function () {
    NY.play()
})
const hack = new Scene({
    ".press": {
        0: {
            display: "none",
        },
        0.1: {
            display: "none",
        },

    },

    "#mailScene1": {
        0: {
            display: "none",
        },
        0.4: {
            display: "block",
        },

    },
    "#mailScene2": {
        4.9: {
            display: "none",
        },
        5: {
            display: "block",
        },

    },
    "#mailScene3": {
        9.9: {
            display: "none",
        },
        10: {
            display: "block",
        },

    },
    "#mailScene4": {
        8: {
            display: "none",
        },
        12: {
            display: "block",
        },

    },
    "#mailScene5": {
        10: {
            display: "none",
        },
        13: {
            display: "block",
        },

    },
    "#mailScene6": {
        11: {
            display: "none",
            transform: "translate(100px,100px)",
        },
        13.5: {
            display: "block",
        },

    },
    "#mailScene7": {
        11: {
            display: "none",
            transform: "translate(130px,200px)",
        },
        13.8: {
            display: "block",
        },

    },
    "#mailScene8": {
        11: {
            display: "none",
            transform: "translate(230px,200px)",

        },
        14: {
            display: "block",
        },

    },
    "#mailScene9": {
        12: {
            display: "none",
            transform: "translate(30px,200px)",

        },
        14.5: {
            display: "block",
        },

    },
    "#mailScene10": {
        11: {
            display: "none",
            transform: "translate(330px,200px)",
        },
        14.9: {
            display: "block",
        },

    },
    "#mailScene11": {
        11: {
            display: "none",
            transform: "translate(-130px,-200px)",

        },
        15.2: {
            display: "block",
        },

    },
    "#mailScene12": {
        11: {
            display: "none",
            transform: "translate(-230px,-100px)",

        },
        15.4: {
            display: "block",
        },

    },
    "#mailScene13": {
        11: {
            display: "none",
            transform: "translate(-330px,-150px)",

        },
        15.5: {
            display: "block",
        },

    },
    ".Desktop": {
        0: {
            display: "block",
        },
        15.5: {
            display: "block",
        },
        15.6: {
            display: "none",
        },


    },
    ".mail": {
        0: {
            opacity: 1,
        },
        15.5: {
            opacity: 1,
        },
        15.6: {
            opacity: 0,
        },


    },
    ".reload": {
        16.5: {
            display: "none",
            opacity:0,
        },
        16.6: {
            display: "flex",
            opacity:0,

        },
        17.5: {
            display:"flex",
            opacity:1,

        },


    },

}, {
    selector: true,
    easing: "ease-in",
});


const NYPlay = new Scene({
    "#mailNYTrigger": {
        0: {
            display: "none",
        },


        1: {
            display: "block",
        },
    },
}, {
    selector: true,
    easing: "ease-in",
})


const NYOpen = new Scene({
    ".press": {
        1: {
            display: "block",
        },
    },
    "#mailNYTrigger": {
        0: {
            display: "none",
        },

    },

}, {
    selector: true,
    easing: "ease-in",
})




closeNY.addEventListener('click', function () {
    hack.play()
})
closeRoger.addEventListener('click', function () {
    NYPlay.play()
})
triggerMail.addEventListener('click', function () {
    NYOpen.play();
})