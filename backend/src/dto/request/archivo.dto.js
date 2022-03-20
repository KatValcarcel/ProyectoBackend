import validator from "validator";
export function archivoDto({ mascotaId, contentType, ext, filename }) {
  if (ext !== "jpg" && especie !== "png" && especie !== "jpeg") {
    throw Error('La especie debe ser "PERRO", "GATO", "OTROS"');
  }
  if (
    contentType !== "image/png" &&
    contentType !== "image/jpg" &&
    contentType !== "image/jpeg"
  ) {
    throw Error('La especie debe ser "PERRO", "GATO", "OTROS"');
  }
  return { mascotaId, contentType, ext, filename };
}
