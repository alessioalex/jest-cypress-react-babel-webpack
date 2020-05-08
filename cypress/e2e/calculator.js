describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/')
    cy.findByText(/^1$/).click()
    cy.findByText(/^\+$/).click()
    cy.findByText(/^2$/).click()
    // .then(subject => {
    //   debugger
    //   return subject
    // })
    // or debug() / pause()
    // or in your appcode if (window.Cypress) {...}
    // .click()
    cy.findByText(/^=$/).click()
    cy.findByTestId('total').should('have.text', '3')
  })
})

describe('authenticated calculator', () => {
  it('displays the username', () => {
    cy.loginAsNewUser().then(user => {
      // now let's verify things are set after login
      cy.visit('/')
      cy.findByTestId('username-display').should('have.text', user.username)
      cy.findByText(/logout/i).click()
      cy.findByTestId('username-display').should('not.exist')
    })
  })
})
