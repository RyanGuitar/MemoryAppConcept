import {elAdd, getId, addClickId, setMenu} from '../scripts/aggregator.js'
import introduction from './introduction.css' assert { type: 'css' };

const landingHTML =
   `<div id="heading">Introduction</div>
    <p>Explain what the Major Memory System is and how the app is set up to help a person learn it.</p>
     <div id="back">back</div>`
  
let AppContent = getId('AppContent')

function setIntroduction(){
  document.adoptedStyleSheets = [introduction];
  elAdd(AppContent, landingHTML)
  addClickId('back', setMenu)
}

export {
  setIntroduction,
}