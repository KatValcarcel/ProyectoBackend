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
