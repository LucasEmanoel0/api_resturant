# ApiRestaurant

API RESTful para gerenciamento de produtos de um restaurante, construída com Node.js, Express, TypeScript, Drizzle ORM e PostgreSQL.

## Funcionalidades
- Cadastro, listagem, atualização e remoção de produtos
- Middleware de tratamento de erros personalizado
- Integração com banco de dados PostgreSQL usando Drizzle ORM
- Estrutura modular para fácil manutenção

## Tecnologias Utilizadas
- Node.js
- Express
- TypeScript
- Drizzle ORM
- PostgreSQL
- Docker (opcional)

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LucasEmanoel0/api_resturant.git
   cd api_resturant
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```env
   DATABASE_URL="postgres://usuario:senha@localhost:5432/ApiiRestaurant"
   ```

4. **Inicie o banco de dados (opcional, se usar Docker):**
   ```bash
   docker-compose up -d
   ```

5. **Rode a aplicação:**
   ```bash
   npm run dev
   ```

6. **Acesse a API:**
   A API estará disponível em `http://localhost:3333`

## Estrutura de Pastas
```
├── drizzle/           # Configuração do Drizzle ORM
├── src/
│   ├── controller/    # Controllers das rotas
│   ├── db/            # Definição das tabelas
│   ├── middlewares/   # Middlewares personalizados
│   ├── routes/        # Rotas da aplicação
│   └── utils/         # Utilitários e classes auxiliares
├── .env               # Variáveis de ambiente
├── docker-compose.yml # Configuração Docker
├── package.json       # Dependências e scripts
└── tsconfig.json      # Configuração TypeScript
```

## Licença
MIT
