describe('API - Criar usuário', () => {
  it('deve cadastrar novo usuário com sucesso', () => {
    cy.request('POST', '/usuarios', {
      nome: 'Usuário API',
      email: `api${Date.now()}@qa.com`,
      password: '123456',
      administrador: 'true'
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })
})
