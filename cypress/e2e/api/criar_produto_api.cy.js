describe('API - Criar produto', () => {
  it('deve cadastrar novo produto com sucesso', () => {
    // Login para obter token
    cy.request('POST', '/login', {
      email: 'fulano@qa.com',
      password: 'teste'
    }).then((loginRes) => {
      const token = loginRes.body.authorization

      cy.request({
        method: 'POST',
        url: '/produtos',
        headers: { Authorization: token },
        body: {
          nome: `Produto API ${Date.now()}`,
          preco: 99,
          descricao: 'Produto cadastrado via Cypress API',
          quantidade: 10
        }
      }).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body.message).to.eq('Cadastro realizado com sucesso')
      })
    })
  })
})

