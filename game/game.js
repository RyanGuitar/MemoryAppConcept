function setGame(){
  import('../scripts/aggregator.js')
      .then(({elAdd, addClickId, setMenu}) => {
        import('./game.css', {assert: {type:'css'}})
        .then(game => {
          const gameHTML =
          `<div id="heading">Game Mode</div>
          <p>Here you can play the main game that keeps track of your progress.</p>
          <p>You can try to beat your high score.</p>
            <div id="back">back</div>`
  
        elAdd(AppContent, gameHTML)
        addClickId('back', setMenu)
         document.adoptedStyleSheets = [game.default]; 
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
  setGame,
}
