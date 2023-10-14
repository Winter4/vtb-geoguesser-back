import Database from "@src/clients/database";
import {Request, Response} from "express";
import {uuid} from "@src/types";
import {Prisma} from "@prisma/client";

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
        o.*,
        COUNT("q"."id") as queuesCount
      FROM 
        "Office" as o
        LEFT JOIN "OfficeService" as os ON "os"."officeId" = "o"."id"
        LEFT JOIN "OfficeInclusion" as oi ON "oi"."officeId" = "o"."id"
        LEFT JOIN "Queue" as q ON "q"."officeId" = "o"."id" AND "q"."serviceId" = ${serviceId}
      WHERE 
        "os"."serviceId" = ${serviceId}
        --AND "q"."status" = 'PENDING' AND "q"."owner" = 'OTHER'
      GROUP BY 
        "o"."id", "oi"."inclusionId"
        --, "q"."serviceId", "q"."ticket", "q"."status", "q"."finishedAt", "q"."createdAt", "q"."officeId", "q"."owner", "q"."id"
       ${
         inclusionIds.length
           ? Prisma.sql`HAVING "oi"."inclusionId" = any(${inclusionIds})`
           : Prisma.empty
       }
       ORDER BY "queuescount" ASC
    ;`;

    res.json(
      JSON.parse(
        JSON.stringify({data: offices}, (_, v) =>
          typeof v === "bigint" ? v.toString() : v
        )
      )
    );
  },
};
