## API REST para Cadastro de Usuários e Celulares

### Descrição
Esta API REST foi desenvolvida para permitir o cadastro de usuários e celulares, onde o cadastro de celulares está associado ao ID do usuário.

## Rotas de Usuário

### Criar Usuário

- **Método:** POST
- **Endpoint:** `/users`
- **Descrição:** Cria um novo usuário.
- **Autenticação:** Não é necessária.

**Exemplo de Corpo da Solicitação:**
```json
{
  "name": "Exemplo de Nome",
  "email": "exemplo@email.com",
  "password": "senha123"
}
```
