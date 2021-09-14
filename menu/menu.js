import {
  elAdd, 
  getId, 
  addClick,
  addClickId, 
  setIntroduction,
  setTutorial,
  setPhonetic,
  setPractice,
  setGame,
} from '../scripts/aggregator.js'
import menu from './menu.css' assert { type: 'css' };

const menuHTML = 
  `<div id="heading">Menu</div>
   <div id="menu">
     <div id="introduction">Introduction</div>
     <div id="tutorial">Tutorial</div>
     <div id="phonetic">Phonetic Alaphabet</div>
     <div id="practice">Practice Basics</div>
     <div id="game">Game Mode</div>
   </div>`

function setMenu(){
  document.adoptedStyleSheets = [menu]; 
  elAdd(AppContent, menuHTML)
  addClickId('introduction', setIntroduction)
  addClickId('tutorial', setTutorial)
  addClickId('phonetic', setPhonetic)
  addClickId('practice', setPractice)
  addClickId('game', setGame)
}

export {
  setMenu,
}