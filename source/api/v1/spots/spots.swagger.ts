export default {
  "/api/v1/spots/": {
    get: {
      tags: ["Spot"],
      summary: "Fetch an offices + ATMs list",
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
                          example: "Отделение на Дворцовой",
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
                        services: {
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
                        inclusions: {
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
                                example: "Можно с маленькими питомцами",
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
      },
    },
  },
};
