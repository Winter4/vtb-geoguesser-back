export default {
  "/api/v1/queue/get-in": {
    post: {
      tags: ["Queue"],
      summary: "Get in the queue in the office",
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
                officeId: {
                  type: "string",
                  format: "uuid",
                  example: "7abc7848-43ea-48f9-b685-3623462845ba",
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
                    type: "object",
                    properties: {
                      ticket: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            format: "uuid",
                            example: "7abc7848-43ea-48f9-b685-3623462845ba",
                          },
                          number: {
                            type: "integer",
                            example: "10",
                          },
                          officeId: {
                            type: "string",
                            format: "uuid",
                            example: "7abc7848-43ea-48f9-b685-3623462845ba",
                          },
                          serviceId: {
                            type: "string",
                            format: "uuid",
                            example: "7abc7848-43ea-48f9-b685-3623462845ba",
                          },
                          ticket: {
                            type: "string",
                            example: "B12",
                          },
                          status: {
                            type: "string",
                            enum: ["PENDING", "FINISHED"],
                            example: "PENDING",
                          },
                          owner: {
                            type: "string",
                            enum: ["MINE", "OTHER"],
                            example: "MINE",
                          },
                          finishedAt: {
                            type: "string",
                            example: "2023-10-14 19:51:09.859",
                          },
                          createdAt: {
                            type: "string",
                            example: "2023-10-14 19:51:09.859",
                          },
                        },
                      },
                      position: {
                        type: "integer",
                        example: "12",
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

  "/api/v1/queue/length": {
    get: {
      tags: ["Queue"],
      summary: "Get the rest of queue length",

      responses: {
        200: {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "object",
                    properties: {
                      ticket: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            format: "uuid",
                            example: "7abc7848-43ea-48f9-b685-3623462845ba",
                          },
                          number: {
                            type: "integer",
                            example: "10",
                          },
                          officeId: {
                            type: "string",
                            format: "uuid",
                            example: "7abc7848-43ea-48f9-b685-3623462845ba",
                          },
                          serviceId: {
                            type: "string",
                            format: "uuid",
                            example: "7abc7848-43ea-48f9-b685-3623462845ba",
                          },
                          ticket: {
                            type: "string",
                            example: "B12",
                          },
                          status: {
                            type: "string",
                            enum: ["PENDING", "FINISHED"],
                            example: "PENDING",
                          },
                          owner: {
                            type: "string",
                            enum: ["MINE", "OTHER"],
                            example: "MINE",
                          },
                          finishedAt: {
                            type: "string",
                            example: "2023-10-14 19:51:09.859",
                          },
                          createdAt: {
                            type: "string",
                            example: "2023-10-14 19:51:09.859",
                          },
                        },
                      },
                      position: {
                        type: "integer",
                        example: "12",
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

  "/api/v1/queue/leave": {
    post: {
      tags: ["Queue"],
      summary: "Leave the queue",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                  format: "uuid",
                  example: "7abc7848-43ea-48f9-b685-3623462845ba",
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
                  message: {
                    type: "string",
                    example: "Вы вышли из очереди",
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
