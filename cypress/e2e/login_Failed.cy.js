describe('Login - falha', () => {
  it('deve exibir erro ao inserir senha incorreta', () => {
    cy.visit('/login')
    cy.get('input[placeholder="Digite seu email"]').type('fulano@qa.com')
    cy.get('input[placeholder="Digite sua senha"]').type('senhaErrada')
    cy.contains('button', 'Entrar').click()
    cy.contains('Email e/ou senha inválidos').should('be.visible')
    cy.url().should('include', '/login')
  })
})
