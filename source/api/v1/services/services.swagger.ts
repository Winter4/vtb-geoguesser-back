export default {
  "/api/v1/services/": {
    get: {
      tags: ["Services"],
      summary: "Fetch a services list",
      responses: {
        200: {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                          format: "uuid",
                          example: "c06ce2d7-32d3-4be2-889a-794793533c6e",
                        },
                        name: {
                          type: "string",
                          example: "Оформление кредита",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
