import { Router } from "express";
import { crearMascota } from "../controllers/mascotas.controller.js";

export const mascotaRouter = Router();

mascotaRouter.route("/mascota").post(crearMascota);
