import { s3 } from "../s3.js";
import { Mascota } from "../models/mascotas.model.js";

export class ArchivosService {
  static async crearArchivo(data) {
    //data ={mascotaid, contentType:'img/jgp',ext: 'jpeg',filename:'firulais.jpeg'}
    //TODO:subir hasta 3 imágenes
    const mascota = await Mascota.findById(data.mascotaId);
    if (mascota.mascotaImagen === null) {
      return {
        message:
          "La mascota ya tiene una imagen, primero elimínela y luego vuelva a crear el archivo",
      };
    }

    const path = `images/${data.mascotaId}`;
    const Key = `${path}/${data.filename}.${data.ext}`;
    const url = s3.getSignedUrl("putObject", {
      Key,
      ContentType: data.contentType,
      Bucket: process.env.AWS_BUCKET,
      Expires: +process.env.AWS_SIGNED_EXPIRES_IN,
    });
    //actualizar Mascota
    const mascotaActualizada = await Mascota.findOneAndUpdate(
      { _id: mascota._id },
      { mascotaImagen: Key },
      { new: true }
    );
    return url;
  }
  static devolverURL(path) {
    return s3.getSignedUrl("getObject", {
      Key: path,
      Bucket: process.env.AWS_BUCKET,
      //   preguntar
      Expires: +process.env.AWS_SIGNED_EXPIRES_IN,
    });
  }
}
