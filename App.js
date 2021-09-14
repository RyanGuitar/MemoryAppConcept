import('./landing/landing.js')
    .then(({setLanding}) => {
        setLanding(); 
    })
    .catch(err => {
      console.log(err.message);
    });

    import('./landing/landing.css', {assert: {type:'css'}})
    .then(landing => {
      document.adoptedStyleSheets = [landing.default]; 
    })
    .catch(err => {
      console.log(err.message);
    });

