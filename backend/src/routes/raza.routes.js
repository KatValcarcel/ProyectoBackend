import { Router } from "express";
import {
  crearRaza,
  devolverRazas,
  getRaza,
} from "../controllers/razas.controller.js";
import { validarUsuario } from "../../utils/validador.js";

export const razaRouter = Router();

razaRouter.route("/raza").all(validarUsuario).post(crearRaza);
razaRouter.get("/razas", devolverRazas);
razaRouter.get("/raza/:id", getRaza);
