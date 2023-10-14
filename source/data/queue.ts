import Database from "@src/clients/database";
import {Queue, TicketStatus, TicketOwner} from "@prisma/client";
import {uuid} from "@src/types";

const db = Database.instance;

export default {
  in: async function (id: uuid | null = null) {
    const filter: {
      status: TicketStatus;
      owner: TicketOwner;
    } = {status: "PENDING", owner: "MINE"};

    const query = id
      ? db.queue.findMany({where: {id: id}})
      : db.queue.findMany({where: {...filter}});

    const [exists] = await query;
    return exists;
  },

  // этот момент должен быть иначе
  // условность хакатона
  getNextNumber: async function () {
    const [{number: code}] = await db.queue.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return code + 1;
  },

  getQueueLength: async function (ticket: Queue | null = null) {
    if (!ticket) ticket = await this.in();

    return db.queue.count({
      where: {
        officeId: ticket.officeId,
        serviceId: ticket.serviceId,
        status: "PENDING",
        owner: {
          not: "MINE",
        },
      },
    });
  },

  leave: async function (ticket: Queue | null = null) {
    if (!ticket) ticket = await this.in();

    return db.queue.update({where: {id: ticket.id}, data: {status: "FINISHED"}});
  },
};
