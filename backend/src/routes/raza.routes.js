import { Router } from "express";
import {
  crearRaza,
  devolverRazas,
  getRaza,
} from "../controllers/razas.controller.js";

export const razaRouter = Router();

razaRouter.route("/raza").post(crearRaza);
razaRouter.get("/razas", devolverRazas);
razaRouter.get("/raza/:id", getRaza);
