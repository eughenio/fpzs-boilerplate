# Fastify-Prisma-Zod-Swagger

Boilerplate para inicio de projetos com Fastify, Prisma, Zod e Swagger

## Setup

Instalando todas as dependências

```bash
npm i
```

Copie o `.env.example` para `.env`

```bash
cp .env.exmaple .env
```

Adicione as infomrações de acordo com o `.env`

## Rodando a aplicação localmente

Altere no `.env` o `NODE_ENV` para `development`

Execute

```bash
npm run dev
```

### Swagger

Para ver o Swagger, acesse

```bash
http://localhost:3000/docs
```

## Rodando a aplicação em Produção

Altere no `.env` o `NODE_ENV` para `production`

Execute

```bash
npm run build
```

Depois, execute

```bash
npm run start
```
