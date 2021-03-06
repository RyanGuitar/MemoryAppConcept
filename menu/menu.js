function setMenu(){
  import('../scripts/aggregator.js')
    .then(({getId, elAdd, addClickId, setIntroduction, setSounds1, setBasics, setSounds2, setGame}) => {
      import('./menu.css', {assert: {type:'css'}})
      .then(menu => {
        const menuHTML = 
        `<div id="heading">Menu</div>
        <div id="menu">
          <div id="introduction">Introduction</div>
          <div id="basics">The Basics</div>
          <div id="sounds1">Sounds 0 - 4</div>
          <div id="sounds2">Sounds 5 - 9</div>
          <div id="game">Game Mode</div>
        </div>`

       let AppContent = getId('AppContent')
       elAdd(AppContent, menuHTML)
       addClickId('introduction', setIntroduction)
       addClickId('basics', setBasics)
       addClickId('sounds1', setSounds1)
       addClickId('sounds2', setSounds2)
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