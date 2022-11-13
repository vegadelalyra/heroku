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
    heroku.addEventListener('click', herokuClick = () => {
        heroku.style.transition = 'transform 0.2s'
        heroku.style.transform = 'scale(0)'
        container.style.border = 'solid 2px black'
        soundEffect_transition.play()
        setTimeout(letsGetStarted, 1500)
    })

    // transform the whole dark page into HEROKU!
    function letsGetStarted() {
        soundEffect_kick.play()
        container.style.border = 'solid 2px white'
        heroku.style.background = 'skyblue'
        body().style.background = 'transparent'
        heroku.style.boxShadow = '#33339983 0px 3px 6px 9px, var(--blueShadow)'
        heroku.style.transition = 'transform 0.1s'
        heroku.style.transform = 'scale(1)'
        heroku.removeEventListener('click', herokuClick)
        audioContext.state === 'suspended' ? audioContext.resume() : null
        introSong.play()
    }

// end of INTRO