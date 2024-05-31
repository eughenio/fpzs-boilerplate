import Fastify from "fastify";
import cors from "@fastify/cors";

export const app = () => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.register(cors, {
    origin: true,
  });

  return fastify;
};
