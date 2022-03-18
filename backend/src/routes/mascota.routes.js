import { Router } from "express";
import {
  crearMascota,
  devolverMascotas,
} from "../controllers/mascotas.controller.js";

export const mascotaRouter = Router();

mascotaRouter.route("/mascota").post(crearMascota);
mascotaRouter.route("/mascotas").get(devolverMascotas);
