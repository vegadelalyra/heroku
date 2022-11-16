/* With this code, heroku! basement follows the beat.
**  All of this was done with the Web Audio API, the web API, some javaScript, and a lot of CSS. Enjoy!
**  
** In order to code with Audio Web API,  your first move is to think your algorithm:
** Define your modular audio graph. For Heroku! this way: source > bidQuadFilter (lowpass) > analyser
** 
** COMING SOON: Songs are going to have Cross-fading between two sounds. 
** And also: you will be able to search any song on the web.
*/

// Got draw your audio graph? Then create your audio context (put the canvas on the table)
const audioContext = new AudioContext(), // new audio context method to web Audio API access 


// Define your audio source (put your first module, the beginning of your audio graph): obj.method(src)
        audioSourceNode = audioContext.createMediaElementSource(introSong), // audio graph node for audio source

// Second. Create our lowpass bidQuadFilter object: new obj(audioCtx, options{type, Q, frequency})
//  Our BiquadFilterNode is going to cutoff all frequencies above 60Hz with -3dB or more volume and let pass through the low ones.
        lowpassFilter = new BiquadFilterNode(audioContext, {type: 'lowpass', Q: -3, frequency: 60}), // modifier audio graph node 


// Create your audio analyser node (this node will analyze the audio source node)
        analyserNode = audioContext.createAnalyser() // audio graph node for data analysis

/* Here comes the fun part! Let's set up our analyserNode to provide us readable audio data.
** fft = Fast Fourier Transform. One of many Fourier Transform algorithms, the most beautiful algorithm. 
** Fourier Transform allows us to dock many signal waves into one expressed in sines and cosines. Don't you love maths? 
** fftSize analyserNode property adjusts the precision or performance of data. While bigger, preciser but slower. 
** fftSize must be between 2^5 and 2^15, so one of: 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, and 32768. */
const Fourier = 128// run these two lines in console to check the freq range of your array indexes.
// console.log( 48000 / ( Fourier / 2 ),'Hz' ) 
analyserNode.fftSize = Fourier // Defaults to 2048. In this case, we only need an animation, so no precision on data is needed.
const reactionPercent = 0.2, scaleCoefficient = reactionPercent/0.7,
// Adjusting our fftSize value, we can tune the frequencies range in audioData[0] we want for our heroku to react */
// 0.1429 since the audioDataArray.maxDecibels = -30, hence: -30 + 1 = 70; 70 / 100 = 0.7; Reaction / 0.7 = Coefficient 

// We need a place to save our audio raw data, that's going to be a typedArray with a defined length.
      bufferLength = analyserNode.frequencyBinCount, // the length for our raw data typedArray (freqBinCount == half of fftSize)
      audioDataArray = new Float32Array(bufferLength) // our Float32bytes typedArray for saving raw data.

// Finally, set up our audio graph (make sure all nodes connected are sorted and already declared).
audioSourceNode.connect(lowpassFilter).connect(analyserNode)
audioSourceNode.connect(audioContext.destination)

/* To run the analyser.getAnyFreqData(TypedArray) method while the audio is playing, we are going to seize the web API
**      of requestAnimationFrame() which, being recursive, instance itself (more or less) 60 times per second. */
      beatDetection = () => {
        if (audioSourceNode.mediaElement.paused == true) return // If music has ended or is paused, stop the data gathering.
        
        analyserNode.getFloatFrequencyData(audioDataArray)      // Read actual frequencies of audio.

        /* freqBinCount divides audioContext.sampleRate (default = 48KHz) in fftSize/2 readable elements.
        ** Thus, each of the audioDataArray[i] contains 48000Hz/128 = 375Hz per channel. */
        heroku.style.transform = `scale(${scaleCoefficient * (audioDataArray[0]/100 + 1) + 1})` 
// OMG IT WORKED WTF ! XD    AAAAAAAAAAAAAAAAA
        window.requestAnimationFrame(beatDetection)     // Throw this code 60 times per second.
}
// .getByteFrequencyData() performs better but it's less precise; .getFloatFrequencyData() is more precise but runs slower.  
