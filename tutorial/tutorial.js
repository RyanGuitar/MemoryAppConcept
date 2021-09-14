function setTutorial(){
  import('../scripts/aggregator.js')
      .then(({elAdd, addClickId, setMenu}) => {
        import('./tutorial.css', {assert: {type:'css'}})
        .then(tutorial => {
          const tutorialHTML =
          `<div id="heading">Tutorial</div>
          <p>Explain the phonetic alphabet system and how to use the memory system.</p>
            <div id="back">back</div>`
  
        elAdd(AppContent, tutorialHTML)
        addClickId('back', setMenu)
         document.adoptedStyleSheets = [tutorial.default]; 
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
  setTutorial,
}