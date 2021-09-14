import {elAdd, getId, addClickId, setMenu} from '../scripts/aggregator.js'
import phonetic from './phonetic.css' assert { type: 'css' };

const phoneticHTML =
   `<div id="heading">Phonetic Alphabet</div>
   <p>A little game to easily learn and practice the phonetic alphabet.</p>
     <div id="back">back</div>`
  
let AppContent = getId('AppContent')

function setPhonetic(){
  document.adoptedStyleSheets = [phonetic];
  elAdd(AppContent, phoneticHTML)
  addClickId('back', setMenu)
}

export {
  setPhonetic,
}