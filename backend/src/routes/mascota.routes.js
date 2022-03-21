import { Router } from "express";
import {
  crearMascota,
  devolverMascotas,
  eliminarMascota,
  getMascota,
  putMascota,
} from "../controllers/mascotas.controller.js";
import { validarUsuario } from "../../utils/validador.js";

export const mascotaRouter = Router();

mascotaRouter.route("/mascota").all(validarUsuario).post(crearMascota);
mascotaRouter.get("/mascotas", devolverMascotas);
mascotaRouter.get("/mascota/:id", getMascota);
mascotaRouter
  .route("/mascota/:id")
  .all(validarUsuario)
  .delete(eliminarMascota)
  .put(putMascota);
