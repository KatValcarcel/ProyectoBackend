import { Router } from "express";
import {
  crearPublicacion,
  devolverPublicacionesEncontrados,
  devolverPublicacionesPerdidos,
  eliminarPublicacion,
  obtenerPublicaciones,
  actualizarPublicacion,
} from "../controllers/publicaciones.controller.js";

export const publicacionRouter = Router();

publicacionRouter.route("/publicacion").post(crearPublicacion);
publicacionRouter.get("/publicaciones/perdidos", devolverPublicacionesPerdidos);
publicacionRouter.get(
  "/publicaciones/encontrados",
  devolverPublicacionesEncontrados
);
publicacionRouter.get("/publicaciones", obtenerPublicaciones);
publicacionRouter
  .route("/publicacion/:id")
  .delete(eliminarPublicacion)
  .put(actualizarPublicacion);
