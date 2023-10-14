import Router from "express";
import wrap from "@src/api/async-wrapper";
import c from "./inclusions.controller";

const inclusions = Router();

inclusions.get("/", wrap(c.get));

export default inclusions;
