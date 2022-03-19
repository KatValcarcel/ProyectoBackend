import { Router } from "express";
import {
  crearPublicacion,
  devolverPublicacionesEncontrados,
  devolverPublicacionesPerdidos,
} from "../controllers/publicaciones.controller";

export const publicacionRouter = Router();

razaRouter.route("/publicacion").post(crearPublicacion);
razaRouter.get("/publicaciones/perdidos", devolverPublicacionesPerdidos);
razaRouter.get("/publicaciones/encontrados", devolverPublicacionesEncontrados);
