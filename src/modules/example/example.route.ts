import { FastifyInstance } from "fastify";
import { getController } from "@/modules/example/example.contoller";
import { $ref } from "@/modules/example/example.schema";

const exampleRoute = async (fastify: FastifyInstance) => {
  fastify.get(
    "/",
    {
      schema: {
        tags: ["Example"],
        description: "Exemplo de rota",
        response: {
          200: $ref("exampleResponseSchema"),
          404: $ref("exampleResponseErrorSchema"),
        },
      },
    },
    getController
  );
};

export default exampleRoute;
