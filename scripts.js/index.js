import { concertos } from './data.js'
import { orchestral } from './data.js'
import { orchestraNarration } from './data.js'
import { concertBandNarration } from './data.js'
import { chamberEnsemblesNarration } from './data.js'
import { chamberMusicDoubleReed } from './data.js'
import { otherInstrumental } from './data.js'
import { pianoSolo } from './data.js'
import { pianoFourHands } from './data.js'
import { twoPianos } from './data.js'
import { pedPiano } from './data.js'
import { instrArrangements } from './data.js'
import { soloVoiceAndAccomp } from './data.js'

const concertosContainer = document.getElementById('concertos-container')
const orchestraContainer = document.getElementById('orchestra-container')
const orchestraNarrContainer = document.getElementById('orchestra-narr-container')
const concertBandNarrContainer = document.getElementById('concert-band-narr-container')
const chamberEnsemblesNarrContainer = document.getElementById('chamber-ensemble-narr-container')
const chamberMusicDoubleReedContainer = document.getElementById('chamber-music-double-reed-container')
const otherInstrumentalContainer = document.getElementById('other-instrumental-works')
const pianoSoloContainer = document.getElementById('piano-solo')
const pianoFourHandsContainer = document.getElementById('piano-four-hands')
const twoPianosContainer = document.getElementById('two-pianos')
const pedPianoContainer = document.getElementById('ped-piano')
const instrArrangementsContainer = document.getElementById('instrumental-arrangements')
const soloVoiceAndAccompContainer = document.getElementById('solo-voice-and-accompaniment')

let concertoHTML = ''

concertos.forEach(concerto => {
    concertoHTML += `
    <div class="concerto">
      <h3>${concerto.Title}</h3>
      <p><strong>Category: </strong>${concerto.Category}</p>
      <p><strong>Forces: </strong>${concerto.Forces}</p>
      <p><strong>Date of Composition: </strong>${concerto.dateOfComposition}</p>
      <p><strong>Duration: </strong>${concerto.Duration}</p>
      <p><strong>Score: </strong>${concerto.Score}</p>
      <p><strong>Part(s): </strong>${concerto.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${concerto.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${concerto.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${concerto.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${concerto.URL}" target="_blank">${concerto.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${concerto.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  concertosContainer.innerHTML = concertoHTML;

  let orchestraHTML = ''

  orchestral.forEach(orchestra => {
    orchestraHTML += `
    <div class="orchestra">
      <h3>${orchestra.Title}</h3>
      <p><strong>Category: </strong>${orchestra.Category}</p>
      <p><strong>Forces: </strong>${orchestra.Forces}</p>
      <p><strong>Date of Composition: </strong>${orchestra.dateOfComposition}</p>
      <p><strong>Duration: </strong>${orchestra.Duration}</p>
      <p><strong>Score: </strong>${orchestra.Score}</p>
      <p><strong>Part(s): </strong>${orchestra.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${orchestra.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${orchestra.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${orchestra.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${orchestra.URL}" target="_blank">${orchestra.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${orchestra.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  orchestraContainer.innerHTML = orchestraHTML;

  let orchestraNarrHTML = ''

  orchestraNarration.forEach(orchestraNarr => {
    orchestraNarrHTML += `
    <div class="orchestraNarr">
      <h3>${orchestraNarr.Title}</h3>
      <p><strong>Category: </strong>${orchestraNarr.Category}</p>
      <p><strong>Forces: </strong>${orchestraNarr.Forces}</p>
      <p><strong>Date of Composition: </strong>${orchestraNarr.dateOfComposition}</p>
      <p><strong>Duration: </strong>${orchestraNarr.Duration}</p>
      <p><strong>Score: </strong>${orchestraNarr.Score}</p>
      <p><strong>Part(s): </strong>${orchestraNarr.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${orchestraNarr.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${orchestraNarr.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${orchestraNarr.recordingFormat}</p>
     <p><strong>URL: </strong><a href="${orchestraNarr.URL}" target="_blank">${orchestraNarr.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${orchestraNarr.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  orchestraNarrContainer.innerHTML = orchestraNarrHTML;

  let concertBandNarrHTML = ''

  concertBandNarration.forEach(concertBandNarr => {
    concertBandNarrHTML += `
    <div class="concertBandNarr">
      <h3>${concertBandNarr.Title}</h3>
      <p><strong>Category: </strong>${concertBandNarr.Category}</p>
      <p><strong>Forces: </strong>${concertBandNarr.Forces}</p>
      <p><strong>Date of Composition: </strong>${concertBandNarr.dateOfComposition}</p>
      <p><strong>Duration: </strong>${concertBandNarr.Duration}</p>
      <p><strong>Score: </strong>${concertBandNarr.Score}</p>
      <p><strong>Part(s): </strong>${concertBandNarr.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${concertBandNarr.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${concertBandNarr.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${concertBandNarr.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${concertBandNarr.URL}" target="_blank">${concertBandNarr.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${concertBandNarr.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  concertBandNarrContainer.innerHTML = concertBandNarrHTML;

  let chamberEnsemblesNarrHTML = ''

  chamberEnsemblesNarration.forEach(chamberEnsemblesNarr => {
    chamberEnsemblesNarrHTML += `
    <div class="chamberEnsemblesNarr">
      <h3>${chamberEnsemblesNarr.Title}</h3>
      <p><strong>Category: </strong>${chamberEnsemblesNarr.Category}</p>
      <p><strong>Forces: </strong>${chamberEnsemblesNarr.Forces}</p>
      <p><strong>Date of Composition: </strong>${chamberEnsemblesNarr.dateOfComposition}</p>
      <p><strong>Duration: </strong>${chamberEnsemblesNarr.Duration}</p>
      <p><strong>Score: </strong>${chamberEnsemblesNarr.Score}</p>
      <p><strong>Part(s): </strong>${chamberEnsemblesNarr.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${chamberEnsemblesNarr.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${chamberEnsemblesNarr.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${chamberEnsemblesNarr.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${chamberEnsemblesNarr.URL}" target="_blank">${chamberEnsemblesNarr.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${chamberEnsemblesNarr.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  chamberEnsemblesNarrContainer.innerHTML = chamberEnsemblesNarrHTML;
  
  let chamberMusicDoubleReedHTML = ''

  chamberMusicDoubleReed.forEach(chamberDoubleReed => {
    chamberMusicDoubleReedHTML += `
    <div class="chamberDoubleReed">
      <h3>${chamberDoubleReed.Title}</h3>
      <p><strong>Category: </strong>${chamberDoubleReed.Category}</p>
      <p><strong>Forces: </strong>${chamberDoubleReed.Forces}</p>
      <p><strong>Date of Composition: </strong>${chamberDoubleReed.dateOfComposition}</p>
      <p><strong>Duration: </strong>${chamberDoubleReed.Duration}</p>
      <p><strong>Score: </strong>${chamberDoubleReed.Score}</p>
      <p><strong>Part(s): </strong>${chamberDoubleReed.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${chamberDoubleReed.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${chamberDoubleReed.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${chamberDoubleReed.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${chamberDoubleReed.URL}" target="_blank">${chamberDoubleReed.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${chamberDoubleReed.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  chamberMusicDoubleReedContainer.innerHTML = chamberMusicDoubleReedHTML;

  let otherInstrumentalHTML = ''

  otherInstrumental.forEach(otherInstr => {
    otherInstrumentalHTML += `
    <div class="otherInstr">
      <h3>${otherInstr.Title}</h3>
      <p><strong>Category: </strong>${otherInstr.Category}</p>
      <p><strong>Forces: </strong>${otherInstr.Forces}</p>
      <p><strong>Date of Composition: </strong>${otherInstr.dateOfComposition}</p>
      <p><strong>Duration: </strong>${otherInstr.Duration}</p>
      <p><strong>Score: </strong>${otherInstr.Score}</p>
      <p><strong>Part(s): </strong>${otherInstr.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${otherInstr.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${otherInstr.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${otherInstr.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${otherInstr.URL}" target="_blank">${otherInstr.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${otherInstr.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  otherInstrumentalContainer.innerHTML = otherInstrumentalHTML;

  let pianoSoloHTML = ''

  pianoSolo.forEach(soloPiano => {
    pianoSoloHTML += `
    <div class="soloPiano">
      <h3>${soloPiano.Title}</h3>
      <p><strong>Category: </strong>${soloPiano.Category}</p>
      <p><strong>Forces: </strong>${soloPiano.Forces}</p>
      <p><strong>Date of Composition: </strong>${soloPiano.dateOfComposition}</p>
      <p><strong>Duration: </strong>${soloPiano.Duration}</p>
      <p><strong>Score: </strong>${soloPiano.Score}</p>
      <p><strong>Part(s): </strong>${soloPiano.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${soloPiano.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${soloPiano.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${soloPiano.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${soloPiano.URL}" target="_blank">${soloPiano.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${soloPiano.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  pianoSoloContainer.innerHTML = pianoSoloHTML;

  let pianoFourHandsHTML = ''

  pianoFourHands.forEach(fourHandsPiano => {
    pianoFourHandsHTML += `
    <div class="fourHandsPiano">
      <h3>${fourHandsPiano.Title}</h3>
      <p><strong>Category: </strong>${fourHandsPiano.Category}</p>
      <p><strong>Forces: </strong>${fourHandsPiano.Forces}</p>
      <p><strong>Date of Composition: </strong>${fourHandsPiano.dateOfComposition}</p>
      <p><strong>Duration: </strong>${fourHandsPiano.Duration}</p>
      <p><strong>Score: </strong>${fourHandsPiano.Score}</p>
      <p><strong>Part(s): </strong>${fourHandsPiano.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${fourHandsPiano.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${fourHandsPiano.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${fourHandsPiano.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${fourHandsPiano.URL}" target="_blank">${fourHandsPiano.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${fourHandsPiano.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  pianoFourHandsContainer.innerHTML = pianoFourHandsHTML;

  let twoPianosHTML = ''

  twoPianos.forEach(twoPiano => {
    twoPianosHTML += `
    <div class="twoPiano">
      <h3>${twoPiano.Title}</h3>
      <p><strong>Category: </strong>${twoPiano.Category}</p>
      <p><strong>Forces: </strong>${twoPiano.Forces}</p>
      <p><strong>Date of Composition: </strong>${twoPiano.dateOfComposition}</p>
      <p><strong>Duration: </strong>${twoPiano.Duration}</p>
      <p><strong>Score: </strong>${twoPiano.Score}</p>
      <p><strong>Part(s): </strong>${twoPiano.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${twoPiano.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${twoPiano.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${twoPiano.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${twoPiano.URL}" target="_blank">${twoPiano.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${twoPiano.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  twoPianosContainer.innerHTML = twoPianosHTML;

  let pedPianoHTML = ''

  pedPiano.forEach(pianoPed => {
    pedPianoHTML += `
    <div class="pianoPed">
      <h3>${pianoPed.Title}</h3>
      <p><strong>Category: </strong>${pianoPed.Category}</p>
      <p><strong>Forces: </strong>${pianoPed.Forces}</p>
      <p><strong>Date of Composition: </strong>${pianoPed.dateOfComposition}</p>
      <p><strong>Duration: </strong>${pianoPed.Duration}</p>
      <p><strong>Score: </strong>${pianoPed.Score}</p>
      <p><strong>Part(s): </strong>${pianoPed.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${pianoPed.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${pianoPed.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${pianoPed.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${pianoPed.URL}" target="_blank">${pianoPed.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${pianoPed.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  pedPianoContainer.innerHTML = pedPianoHTML;

  let instrArrangementsHTML = ''

  instrArrangements.forEach(instrArr => {
    instrArrangementsHTML += `
    <div class="instrArr">
      <h3>${instrArr.Title}</h3>
      <p><strong>Category: </strong>${instrArr.Category}</p>
      <p><strong>Forces: </strong>${instrArr.Forces}</p>
      <p><strong>Date of Composition: </strong>${instrArr.dateOfComposition}</p>
      <p><strong>Duration: </strong>${instrArr.Duration}</p>
      <p><strong>Score: </strong>${instrArr.Score}</p>
      <p><strong>Part(s): </strong>${instrArr.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${instrArr.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${instrArr.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${instrArr.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${instrArr.URL}" target="_blank">${instrArr.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${instrArr.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  instrArrangementsContainer.innerHTML = instrArrangementsHTML;

  let soloVoiceAndAccompHTML = ''

  soloVoiceAndAccomp.forEach(accompAndSoloVoice => {
    soloVoiceAndAccompHTML += `
    <div class="instrArr">
      <h3>${accompAndSoloVoice.Title}</h3>
      <p><strong>Category: </strong>${accompAndSoloVoice.Category}</p>
      <p><strong>Forces: </strong>${accompAndSoloVoice.Forces}</p>
      <p><strong>Date of Composition: </strong>${accompAndSoloVoice.dateOfComposition}</p>
      <p><strong>Duration: </strong>${accompAndSoloVoice.Duration}</p>
      <p><strong>Score: </strong>${accompAndSoloVoice.Score}</p>
      <p><strong>Part(s): </strong>${accompAndSoloVoice.partOrParts}</p>
      <p><strong>programNoteAvailable: </strong>${accompAndSoloVoice.programNoteAvailable}</p>
      <p><strong>Sheet Music Format: </strong>${accompAndSoloVoice.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${accompAndSoloVoice.recordingFormat}</p>
      <p><strong>URL: </strong><a href="${accompAndSoloVoice.URL}" target="_blank">${accompAndSoloVoice.URL}</a></p>
      <p><strong>Catalogue Number: </strong>${accompAndSoloVoice.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  soloVoiceAndAccompContainer.innerHTML = soloVoiceAndAccompHTML;
  