import { app } from "@/app"; // Importa a função app que inicializa o Fastify
import { FastifyInstance } from "fastify"; // Importa o tipo FastifyInstance do Fastify para tipagem

// Função assíncrona que constrói e inicia o servidor
const build = async () => {
  // Inicializa o servidor chamando a função app e atribui a instância do Fastify à variável server
  const server: FastifyInstance = await app();

  try {
    // Tenta iniciar o servidor na porta 3000 e no host 0.0.0.0
    await server.listen({ port: 3000, host: "0.0.0.0" });
  } catch (error) {
    // Caso ocorra algum erro, loga o erro e encerra o processo com código de saída 1
    server.log.error(error);
    process.exit(1);
  }
};

// Chama a função build para iniciar o servidor
build();
