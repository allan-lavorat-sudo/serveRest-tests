describe('Login de usuário', () => {
  it('faz login com credenciais válidas', () => {
    cy.visit('/login')

    // Campo de e-mail
    cy.get('input[placeholder="Digite seu email"]')
      .should('be.visible')
      .type('fulano@qa.com')

    // Campo de senha (pelo placeholder)
    cy.get('input[placeholder="Digite sua senha"]', { timeout: 10000 })
      .should('be.visible')
      .type('teste')

    // Botão Entrar
    cy.contains('button', 'Entrar')
      .should('be.enabled')
      .click()

    // Verifica se não está mais na tela de login
    cy.url().should('not.include', '/login')
  })
})
