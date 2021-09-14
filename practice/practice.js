function setPractice(){
  import('../scripts/aggregator.js')
      .then(({elAdd, addClickId, setMenu}) => {
        import('./practice.css', {assert: {type:'css'}})
        .then(practice => {
          const practiceHTML =
          `<div id="heading">Practice Basics</div>
          <p>Here you can learn the images and their respective names and sounds.</p>
            <div id="back">back</div>`
  
        elAdd(AppContent, practiceHTML)
        addClickId('back', setMenu)
         document.adoptedStyleSheets = [practice.default]; 
        })
        .catch(err => {
          console.log(err.message);
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

/*import {elAdd, getId, addClickId, setMenu} from '../scripts/aggregator.js'
import practice from './practice.css' assert { type: 'css' };


  
let AppContent = getId('AppContent')

function setPractice(){
  document.adoptedStyleSheets = [practice];
  elAdd(AppContent, practiceHTML)
  addClickId('back', setMenu)
}*/

export {
  setPractice,
}