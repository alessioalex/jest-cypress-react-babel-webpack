import {buildUser} from '../support/generate'

describe('registration', () => {
  it('should login an existing user', () => {
    const user = buildUser()

    cy.request({
      url: 'http://localhost:3000/register',
      method: 'POST',
      body: user,
    })

    // now our test can start
    cy.visit('/')
    cy.findByText(/login/i).click()
    cy.findByLabelText(/username/i).type(user.username)
    cy.findByLabelText(/password/i).type(user.password)
    cy.findByText(/submit/i).click()

    // now let's verify things are set after login
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.window()
      .its('localStorage.token')
      .should('be.a', 'string')
    cy.findByTestId('username-display').should('have.text', user.username)
  })
})
