import { buildJsonSchemas } from "fastify-zod";
import z from "zod";

const healthResponseSchema = z.object({
  status: z.string(),
});

export type healthResponse = z.infer<typeof healthResponseSchema>;

export const { schemas: healthSchemas, $ref } = buildJsonSchemas(
  {
    healthResponseSchema,
  },
  { $id: "healthSchemas" }
);
