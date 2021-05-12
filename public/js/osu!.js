// OSU! BEAT DETECTION

// Function to identify peaks

function getPeaksAtThreshold(data, threshold) {
    let peaksArray = [], 
        length = data.length
    for(let i = 0; i < length;) {
        if (data[i] > threshold) {
            peaksArray.push(i)
            // Skip forward ~ 1/4s to get past this peak.
            i += 10000
        }
      i++
    }
    return peaksArray
}

// Create offline context
let offlineContext = new OfflineAudioContext(1, buffer.length, buffer.sampleRate)

// Create buffer source
let source = offlineContext.createBufferSource()
source.buffer = buffer

// Create filter
let filter = offlineContext.createBiquadFilter()
filter.type = "lowpass"

// Pipe the song into the filter, and the filter into the offline context
source.connect(filter)
filter.connect(offlineContext.destination)

// Schedule the song to start playing at time: 0
source.start(0)
 
// Render the song
offlineContext.startRendering()

// Act on the result
offlineContext.oncomplete = function(e) {
  // Filtered buffer!asdgfikhnkasdgsadg
  let filteredBuffer = e.renderedBuffer
}


// Function used to return a histogram of peak intervals

function countIntervalsBetweenNearbyPeaks(peaks) {
    let intervalCounts = []
    peaks.forEach(function(peak, index) {
      for(let i = 0; i < 10; i++) {
        let interval = peaks[index + i] - peak;
        let foundInterval = intervalCounts.some(function(intervalCount) {
          if (intervalCount.interval === interval)
            return intervalCount.count++;
        })
        if (!foundInterval) {
          intervalCounts.push({
            interval: interval,
            count: 1
          })
        }
      }
    })
    return intervalCounts;
  }

// end of OSU! BEAT DETECTION