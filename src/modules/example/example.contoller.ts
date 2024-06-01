import { FastifyReply, FastifyRequest } from "fastify";
import { getControllerData } from "@/modules/example/example.service";

export const getController = (request: FastifyRequest, reply: FastifyReply) => {
  const returnData = getControllerData();
  return reply.status(200).send({ message: returnData });
};
