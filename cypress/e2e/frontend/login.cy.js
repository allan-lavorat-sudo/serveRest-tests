describe('Login de usuário', () => {
  it('deve fazer login com credenciais válidas', () => {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type('fulano@qa.com')
    cy.get('[data-testid="password"]').type('teste')
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('include', '/home')
    cy.contains('Bem-vindo').should('be.visible')
  })
})
