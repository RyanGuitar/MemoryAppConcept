import {elAdd, getId, addClickId, setMenu} from '../scripts/aggregator.js'
import game from './game.css' assert { type: 'css' };

const gameHTML =
   `<div id="heading">Game Mode</div>
   <p>Here you can play the main game that keeps track of your progress.</p>
   <p>You can try to beat your high score.</p>
     <div id="back">back</div>`
  
let AppContent = getId('AppContent')

function setGame(){
  document.adoptedStyleSheets = [game];
  elAdd(AppContent, gameHTML)
  addClickId('back', setMenu)
}

export {
  setGame,
}