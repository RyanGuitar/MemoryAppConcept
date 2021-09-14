import {elAdd, getId, addClickId, setMenu} from '../scripts/aggregator.js'
import tutorial from './tutorial.css' assert { type: 'css' };

const tutorialHTML =
   `<div id="heading">Tutorial</div>
   <p>Explain the phonetic alphabet system and how to use the memory system.</p>
     <div id="back">back</div>`
  
let AppContent = getId('AppContent')

function setTutorial(){
  document.adoptedStyleSheets = [tutorial];
  elAdd(AppContent, tutorialHTML)
  addClickId('back', setMenu)
}

export {
  setTutorial,
}