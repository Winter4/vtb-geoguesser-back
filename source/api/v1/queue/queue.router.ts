import Router from "express";
import wrap from "@src/api/async-wrapper";
import c from "./queue.controller";

const queue = Router();

queue.post("/get-in", wrap(c.getIn));
queue.get("/length", wrap(c.length));
queue.post("/leave", wrap(c.leave));

export default queue;
