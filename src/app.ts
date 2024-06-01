import corsConfig from "@/configs/cors"; // Importa as configurações de CORS
import envOptions from "@/configs/env"; // Importa as configurações de variáveis de ambiente
import loggerConfig from "@/configs/logger"; // Importa as configurações de logger
import swaggerConfig from "@/configs/swagger";
import exampleRoute from "@/modules/example/example.route";
import { exampleSchemas } from "@/modules/example/example.schema";
import cors from "@fastify/cors"; // Importa o plugin de CORS para Fastify
import fastifyEnv from "@fastify/env"; // Importa o plugin para gerenciamento de variáveis de ambiente
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import Fastify from "fastify"; // Importa o framework Fastify

// Função assíncrona que inicializa a aplicação Fastify
export const app = async () => {
  // Cria uma instância do Fastify com as configurações de logger
  const fastify = Fastify({
    logger: loggerConfig,
  });

  // Registra o plugin fastifyEnv com as configurações especificadas
  await fastify.register(fastifyEnv, envOptions);

  // Registra o plugin de CORS com as configurações especificadas
  await fastify.register(cors, corsConfig);

  if (fastify.config.ENABLE_SWAGGER) {
    await fastify.register(fastifySwagger, swaggerConfig);
    await fastify.register(fastifySwaggerUi, {
      routePrefix: "/docs",
    });
  }

  for (const schema of [...exampleSchemas]) {
    fastify.addSchema(schema);
  }

  await fastify.register(exampleRoute, { prefix: "/example" });

  // Retorna a instância do Fastify configurada
  return fastify;
};
