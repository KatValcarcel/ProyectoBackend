import validator from "validator";

export function mascotaDto({
  nombre,
  especie,
  razaId,
  color,
  sexo,
  edad_aprox,
  imagen,
  descripcion,
  contactoId,
  // estado,
}) {
  // if (validator.isEmpty(nombre)) {
  //   throw Error("El nombre no puede estar vacío");
  // }
  if (especie !== "PERRO" && especie !== "GATO" && especie !== "OTROS") {
    throw Error('La especie debe ser "PERRO", "GATO", "OTROS"');
  }
  if (sexo !== "MACHO" && sexo !== "HEMBRA") {
    throw Error('El sexo solo puede ser o "MACHO" o "HEMBRA"');
  }
  return {
    nombre,
    especie,
    razaId,
    color,
    sexo,
    edad_aprox,
    imagen,
    descripcion,
    contactoId,
    // estado,
  };
}
