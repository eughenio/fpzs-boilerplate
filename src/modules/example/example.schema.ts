import { buildJsonSchemas } from "fastify-zod";
import z from "zod";

const exampleResponseSchema = z.object({
  message: z.string(),
});

const exampleResponseErrorSchema = z.object({
  message: z.string(),
});

export type exampleResponse = z.infer<typeof exampleResponseSchema>;

export const { schemas: exampleSchemas, $ref } = buildJsonSchemas(
  {
    exampleResponseSchema,
    exampleResponseErrorSchema,
  },
  { $id: "exampleSchemas" }
);
