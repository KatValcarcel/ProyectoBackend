import { Router } from "express";
import { crearRaza, devolverRazas } from "../controllers/razas.controller.js";

export const razaRouter = Router();

razaRouter.route("/raza").post(crearRaza);
razaRouter.get("/razas", devolverRazas);
