import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { contactoRouter } from "./routes/contacto.routes.js";
import { imagenRouter } from "./routes/imagen.routes.js";
import { mascotaRouter } from "./routes/mascota.routes.js";
import { razaRouter } from "./routes/raza.routes.js";
import { publicacionRouter } from "./routes/publicacion.routes.js";
import { archivoRouter } from "./routes/archivo.routes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.MASCOTAS_EMAIL);

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(json());
app.use(cors());

const PORT = process.env.PORT ?? 3000;

app.use(contactoRouter);
app.use(mascotaRouter);
app.use(imagenRouter);
app.use(razaRouter);
app.use(publicacionRouter);
app.use(archivoRouter);
app.use("/media", express.static(__dirname + "/images"));

app.listen(PORT, async () => {
  console.log(`Server runnning on port ${PORT}`);
  try {
    await mongoose.connect(
      process.env.NODE_ENV === "production"
        ? process.env.DATABASE_URL
        : process.env.DATABASE_URL_DEV
    );
    console.log("Connected to DB 🔌");
  } catch (error) {
    console.log(error);
  }
});
