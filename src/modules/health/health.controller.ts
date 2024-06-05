import { FastifyReply, FastifyRequest } from "fastify";

export const getController = (req: FastifyRequest, repl: FastifyReply) => {
  return repl.status(200).send({ status: "OK" });
};
