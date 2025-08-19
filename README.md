## ✅ Automação de Testes

Este projeto conta com automação de testes voltada tanto para **API** quanto para **frontend**, garantindo qualidade e confiabilidade no desenvolvimento.

---

### 🔹 Testes de API
- **Configuração inicial**: Estruturação do ambiente de testes para a API ServeRest.
- **Ferramentas utilizadas**: Postman.
- **Cobertura**:
  - Testes de **métodos HTTP** (GET, POST, PUT, DELETE).
  - Validação de **códigos de status** e **corpo da resposta**.
  - Testes de **contrato** (schema validation).
  - Casos de **erro** e comportamentos inesperados.
- **Boas práticas adotadas**:
  - Separação de cenários positivos e negativos.
  - Reuso de funções utilitárias para requisições.
  - Variáveis de ambiente para gerenciar URLs e credenciais.
- **Execução**:
  - Localmente, via scripts npm (ou comando equivalente).
  - Integração com CI/CD para execução automatizada a cada push.

---

### 🔹 Testes de Frontend
- **Configuração inicial**: Estruturação dos testes end-to-end simulando interação real do usuário.
- **Ferramentas utilizadas**: Cypress.
- **Cobertura**:
  - Fluxos críticos de navegação.
  - Validação de campos, formulários e mensagens.
  - Testes de responsividade.
  - Validação de integração com a API (ex.: carregamento de dados reais).
- **Boas práticas adotadas**:
  - Page Objects para organização de elementos e ações.
  - Screenshots automáticos em caso de falha.
  - Testes independentes entre si (isolamento de dados).
- **Execução**:
  - Execução local ou em containers.
  - Configuração para rodar no pipeline de CI/CD com relatórios automáticos.

---

### 📊 Benefícios obtidos
- Redução de erros manuais.
- Feedback rápido sobre a qualidade do código.
- Maior confiança nas entregas e deploys.

- Feedback rápido sobre a qualidade do código.
- Maior confiança nas entregas e deploys.
