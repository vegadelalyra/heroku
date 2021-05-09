// ANTHOLOGY OF ELEMENTAL FUNCTIONS

    // getElementById => getE
const getE = id => {
    return document.getElementById(id)
}

    // document.body > body
const body = () => {
    return document.body
}

    // document.body.addEventListener => bodyEvent
const bodyEvt = (evt, fn) => {
    return body().addEventListener(evt, fn)
}

    //console log
const clg = any => {
    return console.log(any)
}

// end of ANTHOLOGY OF ELEMENTAL FUNCTIONS 

// ALBUM OF ELEMENTAL VARIABLES

const heroku = getE('basement'), // heroKU sphere
      container = getE('container'), // heroKU main container
      loader = getE('loader'), // preload screen
      blackHole = getE('blackHole') // blackHole gif

// end of ALBUM OF ELEMENTAL VARIABLES


// INTRO 

    // preload 
document.addEventListener('DOMContentLoaded', () => {
    loader.style.opacity = '0'
    blackHole.style.opacity = '1'
    blackHole.style.transform = 'scale(0)'
    heroku.style.transform = 'scale(1)'
    setTimeout(()=> {loader.remove()}, 1000)
})


    // delete black intro when clicks HEROKU
heroku.addEventListener('click', () => {
    heroku.style.transition = 'transform 0.2s'
    heroku.style.transform = 'scale(0)'
    container.style.border = 'solid 2px black'
    setTimeout(letsGetStarted, 1500)
})

const letsGetStarted = () => {
    container.style.border = 'solid 2px white'
    heroku.style.background = 'skyblue'
    body().style.background = 'transparent'
    heroku.style.boxShadow = '#33339983 0px 3px 6px 9px, var(--blueShadow)'
    heroku.style.transition = 'transform 0.1s'
    heroku.style.transform = 'scale(1)'
}


// end of INTRO
