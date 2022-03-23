import validator from "validator";
export function archivoDto({ mascotaId, contentType, ext, filename }) {
  if (ext !== "jpg" && especie !== "png" && especie !== "jpeg") {
    throw Error("La extensión debe ser jpg, png o jpeg");
  }
  if (
    contentType !== "image/png" &&
    contentType !== "image/jpg" &&
    contentType !== "image/jpeg"
  ) {
    throw Error(
      "El contentType solo puede ser image/png, image/jpg or image/jpeg"
    );
  }
  return { mascotaId, contentType, ext, filename };
}
contentType: ["image/png", "image/jpg", "image/jpeg"];
