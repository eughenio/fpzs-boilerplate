import { FastifyReply, FastifyRequest } from "fastify";

export const getController = (request: FastifyRequest, reply: FastifyReply) => {
  return reply.status(200).send({ message: "OK" });
};
