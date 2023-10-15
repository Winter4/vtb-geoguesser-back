export default {
  "/api/v1/offices/best": {
    post: {
      tags: ["Offices"],
      summary: "Get most suitable sorted bank offices list",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                serviceId: {
                  type: "string",
                  format: "uuid",
                  example: "7abc7848-43ea-48f9-b685-3623462845ba",
                },
                inclusionIds: {
                  type: "array",
                  items: {
                    type: "string",
                    format: "uuid",
                  },
                  example: [
                    "7abc7848-43ea-48f9-b685-3623462845ba",
                    "1utq9913-43ea-48f9-b685-3623462845ba",
                  ],
                },
              },
            },
          },
        },
      },
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
                          example: "ДО «Солнечногорский» Филиала № 7701 Банка ВТБ (ПАО)",
                        },
                        latitude: {
                          type: "number",
                          format: "double",
                          example: "11.000000000000000000000000000000",
                        },
                        longitude: {
                          type: "number",
                          format: "double",
                          example: "23.000000000000000000000000000000",
                        },
                        address: {
                          type: "string",
                          example: "Кронверский проспект, 49",
                        },
                        metroStation: {
                          type: "string",
                          example: "Горьковская",
                        },
                        queueСount: {
                          type: "integer",
                          example: "13",
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
