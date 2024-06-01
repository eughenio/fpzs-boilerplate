const envOptions = {
  confKey: "config",
  schema: {
    type: "object",
    required: ["NODE_ENV", "ENABLE_SWAGGER", "DATABASE_URL"],
    properties: {
      NODE_ENV: {
        type: "string",
        default: "development",
      },
      ENABLE_SWAGGER: {
        type: "boolean",
        default: false,
      },
      DATABASE_URL: {
        type: "string",
      },
    },
  },
  dotenv: true,
};

export default envOptions;
