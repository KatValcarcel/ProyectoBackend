import validator from "validator";

export function publicacionDto({
  activo,
  estado,
  descripcion,
  fechaAprox,
  lugar,
}) {
  if (!validator.isBoolean(activo)) {
    throw Error("El estado debe ser true o false");
  }
  if (estado !== "PERDIDO" && estado !== "ENCONTRADO") {
    throw Error('El estado solo puede ser o "PERDIDO" o "ENCONTRADO"');
  }
  if (validator.isEmpty(descripcion)) {
    throw Error(
      "La publicación debe tener una descripción de cómo se perdió/encontró "
    );
  }
  if (!validator.isDate(fechaAprox)) {
    throw Error("Debe seleccionar una fecha válida");
  }
  if (validator.isEmpty(lugar)) {
    throw Error(
      "Se debe colocar el lugar aproximado en donde se perdió/encontró"
    );
  }
  return { activo, estado, descripcion, fechaAprox, lugar };
}
