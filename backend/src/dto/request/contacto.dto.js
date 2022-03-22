import validator from "validator";

export function contactoDto({
  nombre,
  apellido,
  usuario,
  email,
  telefono,
  password,
}) {
  if (validator.isEmpty(nombre)) {
    throw Error("El nombre no puede estar vacío");
  }
  if (validator.isEmpty(apellido)) {
    throw Error("El nombre no puede estar vacío");
  }
  if (validator.isEmpty(usuario)) {
    throw Error("El usuario no puede estar vacío");
  }

  if (!validator.isEmail(email)) {
    throw Error("Debe ser un correo válido");
  }
  if (!validator.isMobilePhone(telefono, "es-PE")) {
    throw Error("No es un teléfono válido");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Su contraseña debe tener al menos 8 caracteres (hasta 32 caracteres) y al menos un número y una letra"
    );
  }
  return { nombre, apellido, usuario, email, telefono, password };
}
