import Database from "@src/clients/database";
import Queue from "@src/data/queue";
import {Request, Response} from "express";

const db = Database.instance;

export default {
  getIn: async function (req: Request, res: Response) {
    const {officeId, serviceId} = req.body;

    if (await Queue.in()) {
      res.status(409).json({message: "Вы уже в очереди"});
      return;
    }

    const ticket = await db.queue.create({
      data: {
        officeId,
        serviceId,
        ticket: await Queue.getNextNumber().toString(),
        status: "PENDING",
        owner: "MINE",
      },
    });

    res.json({data: {ticket, position: await Queue.getQueueLength(ticket)}});
  },

  length: async function (req: Request, res: Response) {
    const myTicket = await Queue.in();

    if (!myTicket) {
      res.json({data: {position: null}, message: "Вы не в очереди"});
      return;
    }

    res.json({data: {ticket: myTicket, position: await Queue.getQueueLength(myTicket)}});
  },

  leave: async function (req: Request, res: Response) {
    const {id} = req.body;

    const myTicket = await Queue.in(id);

    if (!myTicket) {
      res.json({data: {position: null}, message: "Вы не в очереди"});
      return;
    }

    await Queue.leave(myTicket);
    res.json({message: "Вы вышли из очереди"});
  },
};
