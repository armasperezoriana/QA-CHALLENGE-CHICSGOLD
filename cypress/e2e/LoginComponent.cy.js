describe("Login Component", () => {
  beforeEach(() => { 
    cy.visit('http://localhost:3000') 
    cy.contains('Login').click()
  })


 
  it('Incorrect credentials', () => {
  

    cy.get('[placeholder=Username]').type('usuario')
    cy.get('[placeholder=Password]').type('contrasena')
    cy.get('#formButon').click()
  })


  it('Correct credentials', () => {
  

    cy.get('[placeholder=Username]').type('testuser')
    cy.get('[placeholder=Password]').type('password')
    cy.get('#formButon').click()
  })
  

  it('Empty data', () => {
  
  
    cy.get('[placeholder=Username]').clear();
    cy.get('[placeholder=Password]').clear('')
    cy.get('#formButon').click()
  })
  

   it('Correct user and incorrect password', () => {
  

    cy.get('[placeholder=Username]').type('testuser').should('not.be.disabled')
    cy.get('[placeholder=Password]').type('passwordSS')
    cy.get('#formButon').click()
  })
  

   it('Incorrect user and correct password', () => {
  

    cy.get('[placeholder=Username]').type('testuser')
    cy.get('[placeholder=Password]').type('password')
    cy.get('#formButon').click()
  })


  it('Test token generation and expiration', () => {

    cy.contains('Login').click();
    cy.get('[placeholder=Username]').type('testuser');
    cy.get('[placeholder=Password]').type('password');
    cy.get('#formButon').click();
  

    const sampletoken = 'sampletoken123';
    cy.window().then((win) => {
      win.localStorage.setItem('authToken', sampletoken);
  

      const storedToken = win.localStorage.getItem('authToken');
      expect(storedToken).to.equal(sampletoken); 
    });
  
   
    cy.contains('Logged in with token:').then(($message) => {
      const token = $message.text().replace('Logged in with token: ', '');
      

      expect(token).to.not.be.empty;
  
    
      cy.window().then((win) => {
        win.localStorage.setItem('authToken', token);
        const storedToken = win.localStorage.getItem('authToken'); 
  
        
        expect(storedToken).to.not.be.null; 
        expect(storedToken).to.equal(token); 
      });
    });
  
  })
  

});
