describe('Cadastro de usuário', () => {
  it('deve cadastrar um novo usuário com sucesso', () => {
    cy.visit('/cadastrarusuarios')
    cy.get('#nome').type('Usuário Teste')
    cy.get('#email').type(`teste${Date.now()}@qa.com`)
    cy.get('#password').type('123456')
    cy.get('#administrador').check()
    cy.contains('button', 'Cadastrar').click()
    cy.contains('Cadastro realizado com sucesso').should('be.visible')
  })
})

