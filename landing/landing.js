function setLanding(){
  import('../scripts/aggregator.js')
    .then(({getId, elAdd,addClickId, setMenu}) => {
      const landingHTML =
      `<div id="landing">
        <div id="heading">Major Memory Trainer</div>
         <div id="start">click to start</div>
       </div>`
       let AppContent = getId('AppContent')
       elAdd(AppContent, landingHTML)
       addClickId('landing', setMenu);
    })
    .catch(err => {
      console.log(err.message);
    });
}

export {
  setLanding,
}