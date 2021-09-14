function setPhonetic(){
  import('../scripts/aggregator.js')
      .then(({elAdd, addClickId, setMenu}) => {
        import('./Phonetic.css', {assert: {type:'css'}})
        .then(phonetic => {
          const phoneticHTML =
          `<div id="heading">Phonetic Alphabet</div>
          <p>A little game to easily learn and practice the phonetic alphabet.</p>
            <div id="back">back</div>`
  
        elAdd(AppContent, phoneticHTML)
        addClickId('back', setMenu)
         document.adoptedStyleSheets = [phonetic.default]; 
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
  setPhonetic,
}