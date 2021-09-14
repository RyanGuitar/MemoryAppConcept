import {elAdd, getId, addClickId, setMenu} from '../scripts/aggregator.js'


const landingHTML =
   `<div id="landing">
     <div id="heading">Major Memory Trainer</div>
      <div id="start">click to start</div>
    </div>`
  
let AppContent = getId('AppContent')

function setLanding(){
  elAdd(AppContent, landingHTML)
  addClickId('landing', setMenu);
}

export {
  setLanding,
}