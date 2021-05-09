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

const heroku = getE('basement'), // heroKU main container
      eclipse = getE('eclipse') // moon eclipse effect

// end of ALBUM OF ELEMENTAL VARIABLES

// INTRO 


    // resize eclipse white border with the heroKU! when hover
heroku.addEventListener('mouseover', () => {
    eclipse.style.transform = 'scale(1.2)'
})
heroku.addEventListener('mouseout', () => {
    eclipse.style.transform = 'scale(1)'
})

    // delete black intro when clicks HEROKU
heroku.addEventListener('click', () => {
    body().style.background = 'transparent'
    heroku.style.background = 'skyblue'
    heroku.style.boxShadow = '#33339983 0px 3px 6px 9px, var(--blueShadow)'
})


// end of INTRO
