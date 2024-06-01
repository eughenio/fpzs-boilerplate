import Fastify from "fastify"; // Importa o framework Fastify
import cors from "@fastify/cors"; // Importa o plugin de CORS para Fastify
import fastifyEnv from "@fastify/env"; // Importa o plugin para gerenciamento de variáveis de ambiente
import envOptions from "./config/env"; // Importa as configurações de variáveis de ambiente
import corsConfig from "./config/cors"; // Importa as configurações de CORS
import loggerConfig from "./config/logger"; // Importa as configurações de logger

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

  // Retorna a instância do Fastify configurada
  return fastify;
};
