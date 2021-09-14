import('/landing/landing.js')
    .then(({setLanding}) => {
        setLanding(); 
    })
    .catch(err => {
      land.textContent = err.message;
    });

    import('/landing/landing.css', {assert: {type:'css'}})
    .then(landing => {
      
      document.adoptedStyleSheets = [landing.default]; 
    })
    .catch(err => {
      landing.textContent = err.message;
    });

