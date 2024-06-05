import { FastifyInstance } from "fastify";
import { $ref } from "@/modules/health/health.schema";
import { getController } from "./health.controller";

const healthRoute = async (fastify: FastifyInstance) => {
  fastify.get(
    "/",
    {
      schema: {
        tags: ["Health"],
        description: "Rota de health",
        response: {
          200: $ref("healthResponseSchema"),
        },
      },
    },
    getController
  );
};

export default healthRoute;
