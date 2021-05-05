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


// end of ANTHOLOGY OF ELEMENTAL FUNCTIONS 

// ALBUM OF ELEMENTAL VARIABLES

const heroKU = getE('basement') // heroKU main container

// end of ALBUM OF ELEMENTAL VARIABLES

// INTRO 

    // delete black intro when clicks HEROKU
heroKU.addEventListener('click', () => {
    body().style.background = 'transparent'
    heroKU.style.background = 'skyblue'
    heroKU.style.boxShadow = '#33339983 0px 3px 6px 9px'
})

// end of INTRO
