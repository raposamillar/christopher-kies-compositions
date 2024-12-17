import { concertos } from './data.js'
import { orchestral } from './data.js'
import { orchestraNarration } from './data.js'
import { concertBandNarration } from './data.js'
import { chamberEnsemblesNarration } from './data.js'

const concertosContainer = document.getElementById('concertos-container')
const orchestraContainer = document.getElementById('orchestra-container')
const orchestraNarrContainer = document.getElementById('orchestra-narr-container')
const concertBandNarrContainer = document.getElementById('concert-band-narr-container')
const chamberEnsemblesNarrContainer = document.getElementById('chamber-ensemble-narr-container')

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
  