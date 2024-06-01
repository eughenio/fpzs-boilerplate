import { FastifyInstance } from "fastify";

declare module "fastify" {
  export interface FastifyInstance {
    config: {
      NODE_ENV: "development" | "stage" | "production";
      ENABLE_SWAGGER: boolean;
      DATABASE_URL: string;
    };
  }
}
