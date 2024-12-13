import { concertos } from './data.js';

const container = document.getElementById('compositions-container')

let concertoHTML = ''

concertos.forEach(concerto => {
    concertoHTML += `
    <div class="concerto">
      <h2>${concerto.Title}</h2>
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
  container.innerHTML = concertoHTML;
  