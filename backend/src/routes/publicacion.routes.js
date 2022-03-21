import { Router } from "express";
import {
  crearPublicacion,
  devolverPublicacionesEncontrados,
  devolverPublicacionesPerdidos,
  eliminarPublicacion,
  obtenerPublicaciones,
  actualizarPublicacion,
  verPublicacion,
} from "../controllers/publicaciones.controller.js";
import { validarUsuario } from "../../utils/validador.js";

export const publicacionRouter = Router();

publicacionRouter
  .route("/publicacion")
  .all(validarUsuario)
  .post(crearPublicacion);
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
publicacionRouter.route("/publicacion/:id").get(verPublicacion);
