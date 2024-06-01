import corsConfig from "@/configs/cors"; // Importa as configurações de CORS
import envOptions from "@/configs/env"; // Importa as configurações de variáveis de ambiente
import loggerConfig from "@/configs/logger"; // Importa as configurações de logger
import swaggerConfig from "@/configs/swagger"; // Importa as configurações do Swagger
import exampleRoute from "@/modules/example/example.route"; // Importa a rota de exemplo
import { exampleSchemas } from "@/modules/example/example.schema"; // Importa os esquemas de exemplo
import cors from "@fastify/cors"; // Importa o plugin de CORS para Fastify
import fastifyEnv from "@fastify/env"; // Importa o plugin para gerenciamento de variáveis de ambiente
import fastifySwagger from "@fastify/swagger"; // Importa o plugin do Swagger para documentação da API
import fastifySwaggerUi from "@fastify/swagger-ui"; // Importa o plugin do Swagger UI para interface gráfica da documentação
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

  // Condicional para registrar o Swagger se estiver habilitado nas configurações
  if (fastify.config.ENABLE_SWAGGER) {
    // Registra o plugin fastifySwagger com as configurações especificadas
    await fastify.register(fastifySwagger, swaggerConfig);
    // Registra o plugin fastifySwaggerUi com o prefixo "/docs" para acessar a interface gráfica
    await fastify.register(fastifySwaggerUi, {
      routePrefix: "/docs",
    });
  }

  // Adiciona cada schema de exemplo à instância do Fastify
  for (const schema of [...exampleSchemas]) {
    fastify.addSchema(schema);
  }

  // Registra a rota de exemplo com o prefixo "/example"
  await fastify.register(exampleRoute, { prefix: "/example" });

  // Retorna a instância do Fastify configurada
  return fastify;
};
