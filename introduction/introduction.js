function setIntroduction(){
import('../scripts/aggregator.js')
    .then(({elAdd, addClickId, setMenu}) => {
      import('./introduction.css', {assert: {type:'css'}})
      .then(introduction => {
        const landingHTML =
        `<div id="heading">Introduction</div>
          <p>Explain what the Major Memory System is and how the app is set up to help a person learn it.</p>
          <div id="back">back</div>`

      elAdd(AppContent, landingHTML)
      addClickId('back', setMenu)
       document.adoptedStyleSheets = [introduction.default]; 
      })
      .catch(err => {
        console.log(err.message);
      });
    })
    .catch(err => {
      console.log(err.message);
    });
}

export {
  setIntroduction,
}