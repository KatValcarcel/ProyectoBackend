import { Router } from "express";
import {
  crearMascota,
  devolverMascotas,
  eliminarMascota,
  getMascota,
  putMascota,
} from "../controllers/mascotas.controller.js";

export const mascotaRouter = Router();

mascotaRouter.route("/mascota").post(crearMascota).get(getMascota);
mascotaRouter.get("/mascotas", devolverMascotas);
mascotaRouter
  .route("/mascota/:id")
  .delete(eliminarMascota)
  .get(getMascota)
  .put(putMascota);
