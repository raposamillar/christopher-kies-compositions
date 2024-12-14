import { concertos } from './data.js'
import { orchestral } from './data.js'
import { orchestraNarration } from './data.js'

const concertosContainer = document.getElementById('concertos-container')
const orchestraContainer = document.getElementById('orchestra-container')
const orchestraNarrContainer = document.getElementById('orchestra-narr-container')

let concertoHTML = ''

concertos.forEach(concerto => {
    concertoHTML += `
    <div class="concerto">
      <h3>${concerto.Title}</h3>
      <p><strong>Type: </strong>${concerto.Type}</p>
      <p><strong>Date of Composition: </strong>${concerto.dateOfComposition}</p>
      <p><strong>Duration: </strong>${concerto.Duration}</p>
      <p><strong>Score: </strong>${concerto.Score}</p>
      <p><strong>Part(s): </strong>${concerto.partOrParts}</p>
      <p><strong>Note: </strong>${concerto.Note}</p>
      <p><strong>Sheet Music Format: </strong>${concerto.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${concerto.recordingFormat}</p>
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
      <p><strong>Type: </strong>${orchestra.Type}</p>
      <p><strong>Date of Composition: </strong>${orchestra.dateOfComposition}</p>
      <p><strong>Duration: </strong>${orchestra.Duration}</p>
      <p><strong>Score: </strong>${orchestra.Score}</p>
      <p><strong>Part(s): </strong>${orchestra.partOrParts}</p>
      <p><strong>Note: </strong>${orchestra.Note}</p>
      <p><strong>Sheet Music Format: </strong>${orchestra.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${orchestra.recordingFormat}</p>
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
      <p><strong>Type: </strong>${orchestraNarr.Type}</p>
      <p><strong>Date of Composition: </strong>${orchestraNarr.dateOfComposition}</p>
      <p><strong>Duration: </strong>${orchestraNarr.Duration}</p>
      <p><strong>Score: </strong>${orchestraNarr.Score}</p>
      <p><strong>Part(s): </strong>${orchestraNarr.partOrParts}</p>
      <p><strong>Note: </strong>${orchestraNarr.Note}</p>
      <p><strong>Sheet Music Format: </strong>${orchestraNarr.sheetMusicFormat}</p>
      <p><strong>Recording Format: </strong>${orchestraNarr.recordingFormat}</p>
      <p><strong>Catalogue Number: </strong>${orchestraNarr.catalogueNo}</p>
    </div>
    <hr>
  `
  })
  orchestraNarrContainer.innerHTML = orchestraNarrHTML;
  