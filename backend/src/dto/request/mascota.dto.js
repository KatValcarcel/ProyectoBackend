import validator from "validator";

export function mascotaDto({
  nombre,
  especie,
  raza,
  color,
  sexo,
  edad_aprox,
  imagen,
  descripcion,
  estado,
}) {
  if (validator.isEmpty(nombre)) {
    throw Error("El nombre no puede estar vacío");
  }
  if (especie !== "PERRO" && especie !== "GATO" && especie !== "OTROS") {
    throw Error('La especie debe ser "PERRO", "GATO", "OTROS"');
  }
  if (sexo !== "MACHO" && sexo !== "HEMBRA") {
    throw Error('El sexo solo puede ser o "MACHO" o "HEMBRA"');
  }
  return {
    nombre,
    especie,
    raza,
    color,
    sexo,
    edad_aprox,
    imagen,
    descripcion,
    estado,
  };
}
