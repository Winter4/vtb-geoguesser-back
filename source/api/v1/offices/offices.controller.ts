import Database from "@src/clients/database";
import {Request, Response} from "express";
import {uuid} from "@src/types";

const db = Database.instance;

export default {
  best: async function (req: Request, res: Response) {
    const {
      serviceId,
      inclusionIds,
    }: {
      serviceId: uuid;
      inclusionIds: uuid[];
    } = req.body;

    const offices = await db.$queryRaw`--sql
      SELECT 
        o.* 
      FROM 
        "Office" as o
        LEFT JOIN "OfficeService" as os ON "os"."officeId" = "o"."id"
        LEFT JOIN "OfficeInclusion" as oi ON "oi"."officeId" = "o"."id"
      WHERE 
        "os"."serviceId" = ${serviceId}
      GROUP BY 
        "o"."id", "oi"."inclusionId"
      HAVING
        "oi"."inclusionId" = any(${inclusionIds});
    `;

    res.json({data: offices});
  },
};
