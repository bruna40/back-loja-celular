# API REST para Cadastro de Usuários e Celulares

## Descrição
Esta API REST foi desenvolvida para permitir o cadastro de usuários e celulares, onde o cadastro de celulares está associado ao ID do usuário.

## Tecnologias Utilizadas
- Node.js
- Express
- PostgreSQL
- Prisma
- Obs.: Optei por utilizar o Prisma como ORM, pois o Sequelize estava dando problema ao conectar com o banco de dados da vercel.

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
### Criar Produto

- **Método:** POST
- **Endpoint:** `/products`
- **Descrição:** Cria um novo produto.
- **Autenticação:** Não é necessária.

**Exemplo de Corpo da Solicitação:**
```json
{
  "name": "Exemplo de Nome",
  "brand": "Exemplo de Marca",
  "model": "Exemplo de Modelo",
  "price": 100.00,
  "color": "Exemplo de Cor",
  "userId": "5f5e3e3e3e3e3e3e3e3e3e3e"
}
```