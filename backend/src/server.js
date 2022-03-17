import express, { json } from "express";
import mongoose from "mongoose";
import { contactoRouter } from "./routes/contacto.routes.js";
import { imagenRouter } from "./routes/imagen.routes.js";
import { mascotaRouter } from "./routes/mascota.routes.js";

const app = express();
app.use(json());

const PORT = process.env.PORT ?? 3000;

app.use(contactoRouter);
app.use(mascotaRouter);
app.use(imagenRouter);

app.listen(PORT, async () => {
  console.log(`Server runnning on port ${PORT}`);
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to DB 🔌");
  } catch (error) {
    console.log(error);
  }
});
