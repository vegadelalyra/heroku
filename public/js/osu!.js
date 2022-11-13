/* With this code, heroku! basement follows the beat.
**  All of this was done with the Web Audio API, 
**  some javaScript, and a lot of CSS. Enjoy!
**
** In order to code with Audio Web API, 
**  your first move on your algorithm 
**  must be to define your modular audio graph.
** For Heroku! this way: source > analyser > output
** We won't modify our audio sources yet... 
** However, songs are going to have 
**  Cross-fading between two sounds. 
*/

// Got draw your audio graph? Then create your audio context
    // for Audio Web API implementation
    audioContext = new AudioContext(), // audio context object
    audioSourceNode = audioCtx.createMediaElementSource(), // audio graph node for audio source
    analyserNode = audioContext.createAnalyser() // audio graph node for data analysis