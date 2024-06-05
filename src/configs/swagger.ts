const swaggerConfig = {
  swagger: {
    info: {
      title: "RESTful APIs using Fastify",
      description: "CRUDs using Swagger, Fastify and Prisma",
      version: "0.0.1",
    },
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      { name: "Example", description: "Exemplo de end-points" },
      { name: "Health", description: "Rotas de healthcheck" },
    ],
  },
};

export default swaggerConfig;
