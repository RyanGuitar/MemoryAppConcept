import {elAdd, getId, addClickId, setMenu} from '../scripts/aggregator.js'
import practice from './practice.css' assert { type: 'css' };

const practiceHTML =
   `<div id="heading">Practice Basics</div>
   <p>Here you can learn the images and their respective names and sounds.</p>
     <div id="back">back</div>`
  
let AppContent = getId('AppContent')

function setPractice(){
  document.adoptedStyleSheets = [practice];
  elAdd(AppContent, practiceHTML)
  addClickId('back', setMenu)
}

export {
  setPractice,
}