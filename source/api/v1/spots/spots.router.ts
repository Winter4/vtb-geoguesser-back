import Router from "express";
import c from "./spots.controller";
import wrap from "@src/api/async-wrapper";

const spots = Router();

spots.get("/", wrap(c.get));

export default spots;
