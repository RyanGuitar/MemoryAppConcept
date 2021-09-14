function setMenu(){
  import('../scripts/aggregator.js')
    .then(({getId, elAdd, addClickId, setIntroduction, setTutorial, setPhonetic, setPractice, setGame}) => {
      import('./menu.css', {assert: {type:'css'}})
      .then(menu => {
        const menuHTML = 
        `<div id="heading">Menu</div>
        <div id="menu">
          <div id="introduction">Introduction</div>
          <div id="tutorial">Tutorial</div>
          <div id="phonetic">Phonetic Alaphabet</div>
          <div id="practice">Practice Basics</div>
          <div id="game">Game Mode</div>
        </div>`

       let AppContent = getId('AppContent')
       elAdd(AppContent, menuHTML)
       addClickId('introduction', setIntroduction)
       addClickId('tutorial', setTutorial)
       addClickId('phonetic', setPhonetic)
       addClickId('practice', setPractice)
       addClickId('game', setGame)
       document.adoptedStyleSheets = [menu.default]; 
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
  setMenu,
}