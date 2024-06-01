# Fastify-Prisma-Zod-Swagger

Boilerplate para início de projetos com Fastify, Prisma, Zod e Swagger.

## Tecnologias Utilizadas

- **Fastify**: Framework web focado em desempenho e baixo overhead.
- **Prisma**: ORM moderno e intuitivo para Node.js e TypeScript.
- **Zod**: Biblioteca de validação e definição de esquemas para TypeScript.
- **Swagger**: Ferramenta para documentação de APIs RESTful.

## Setup

### 1. Instalação das Dependências

Para instalar todas as dependências, execute:

```bash
npm i
```

### 2. Configuração do Ambiente

Copie o `.env.example` para `.env`

```bash
cp .env.exmaple .env
```

Em seguida, adicione as informações necessárias ao arquivo `.env` de acordo com as configurações no `config/envs.ts`.

## Desenvolvimento

### 1. Configuração do Ambiente de Desenvolvimento

Altere a variável `NODE_ENV` no arquivo `.env` para `development`:

```bash
NODE_ENV=development
```

### 2. Execução da Aplicação

Para iniciar a aplicação em modo de desenvolvimento, execute:

```bash
npm run dev
```

### 3. Acesso ao Swagger

Para visualizar a documentação Swagger, acesse:

```bash
http://localhost:3000/docs
```

## Produção

## 1. Configuração do Ambiente de Produção

Altere a variável `NODE_ENV` no arquivo `.env` para `production`:

```bash
NODE_ENV=production
```

## 2. Construção da Aplicação

Para construir a aplicação para produção, execute:

```bash
npm run build
```

## 3. Execução da Aplicação

Após a construção, execute a aplicação com:

```bash
npm run start
```

### Estrutura do projeto

```bash
.
├── prisma
└── src
    ├── @types
    ├── configs
    ├── modules
    │   └── example
    └── utils
```
