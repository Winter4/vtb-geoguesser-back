import Database from "@src/clients/database";
import { Request, Response } from "express";

const db = Database.instance;

export default {
  get: async function (req: Request, res: Response) {
    const result = await db.service.findMany();
    res.json({ data: result });
  },
};
