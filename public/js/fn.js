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
    
    // console log => clg
    const clg = any => {
        return console.log(any)
    }
    
    // get one random element from any array => randomEl(arr)
    const randomEl = arr => {
        let x = Math.round( Math.random() * ( arr.length - 1 ) )
        return arr[x] 
    }

// end of ANTHOLOGY OF ELEMENTAL FUNCTIONS 

    
// ALBUM OF ELEMENTAL VARIABLES
    
const   heroku = getE('basement'), // heroKU sphere
        container = getE('container'), // heroKU main container
        loader = getE('loader'), // preload screen
        blackHole = getE('blackHole') // blackHole gif


// end of ALBUM OF ELEMENTAL VARIABLES