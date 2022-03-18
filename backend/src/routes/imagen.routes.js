import { Router } from "express";
import Multer from "multer";
import { nanoid } from "nanoid";
import { subirImagen } from "../controllers/imagen.controller.js";

export const imagenRouter = Router();

const almacenamiento = Multer.diskStorage({
  destination: "./src/images",
  filename: (req, archivo, callback) => {
    const id = nanoid(5);
    callback(null, id + archivo.originalname);
  },
});
const multerMiddleware = Multer({
  storage: almacenamiento,
  limits: { filesize: 2 * 1024, files: 3 },
});
// TODO: poder subir más de 2 imágenes
imagenRouter.post(
  "/subir-imagen/:id",
  multerMiddleware.single("imagen"),
  subirImagen
);
