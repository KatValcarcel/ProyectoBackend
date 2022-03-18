import { Router } from "express";
import {
  crearMascota,
  devolverMascotas,
  eliminarMascota,
} from "../controllers/mascotas.controller.js";

export const mascotaRouter = Router();

mascotaRouter.route("/mascota").post(crearMascota);
mascotaRouter.get("/mascotas", devolverMascotas);
mascotaRouter.route("/mascota/:id").delete(eliminarMascota);
