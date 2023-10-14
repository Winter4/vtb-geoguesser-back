import Database from "@src/clients/database";
import { Request, Response } from "express";

const db = Database.instance;

export default {
  get: async function (req: Request, res: Response) {
    const result = await db.$queryRaw`--sql
      SELECT 
        o.*,
        jsonb_agg(jsonb_build_object('id', "serviceId", 'name', "s"."name")) as services, 
        jsonb_agg(jsonb_build_object('id', "inclusionId", 'name', "i"."name")) as inclusions 

      FROM "Office" as o

      LEFT JOIN "WorkTime" as wt ON "wt"."officeId" = "o"."id"
      LEFT JOIN "OfficeService" as os ON "os"."officeId" = "o"."id"
      LEFT JOIN "Service" as s ON "s"."id" = "os"."serviceId"
      LEFT JOIN "OfficeInclusion" as oi ON "oi"."officeId" = "o"."id"
      LEFT JOIN "Inclusion" as i ON "i"."id" = "oi"."inclusionId"

      GROUP BY "o"."id", "os"."serviceId", "s"."name", "oi"."inclusionId", "i"."name";
    `;

    res.json({ data: result });
  },
};
