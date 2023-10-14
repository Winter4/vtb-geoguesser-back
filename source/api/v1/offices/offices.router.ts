import Router from "express";
import wrap from "@src/api/async-wrapper";
import c from "./offices.controller";

const offices = Router();

offices.post("/best", wrap(c.best));

export default offices;
