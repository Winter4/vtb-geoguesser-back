import Router from "express";
import wrap from "@src/api/async-wrapper";
import c from "./services.controller";

const services = Router();

services.get("/", wrap(c.get));

export default services;
