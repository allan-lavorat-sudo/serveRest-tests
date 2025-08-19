describe('API - Login com sucesso', () => {
  it('deve autenticar e retornar token', () => {
    cy.request('POST', '/login', {
      email: 'fulano@qa.com',
      password: 'teste'
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('authorization')
      cy.log('Token recebido:', res.body.authorization)
    })
  })
})

