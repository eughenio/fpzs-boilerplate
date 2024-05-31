import { FastifyInstance } from "fastify";
import { app } from "./app.js";

const build = async () => {
  const server: FastifyInstance = app();
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

build();
