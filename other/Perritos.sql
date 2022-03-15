CREATE TYPE "sexo" AS ENUM (
  'HEMBRA',
  'MACHO'
);

CREATE TYPE "estadoMascota" AS ENUM (
  'PERDIDA',
  'ENCONTRADA',
  'EN_CASA'
);

CREATE TABLE "CONTACTOS" (
  "id" int PRIMARY KEY,
  "nombre" varchar(50),
  "apellido" varchar(50),
  "email" varchar(50),
  "telefono" varchar(9),
  "password" varchar(20)
);

CREATE TABLE "MASCOTAS" (
  "id" int PRIMARY KEY,
  "nombre" varchar(10),
  "especie" varchar(10),
  "raza_id" int,
  "sexo" sexo,
  "fecha_aprox" date,
  "edad_aprox" varchar(10),
  "tamano" varchar(20),
  "n_chip" varchar(20),
  "foto" text,
  "descripcion" text,
  "estado" estadoMascota,
  "contacto_id" int
);

CREATE TABLE "RAZAS" (
  "id" int PRIMARY KEY,
  "nombre" varchar(30)
);

CREATE TABLE "PUBLICACIONES" (
  "id" int PRIMARY KEY,
  "estado" boolean,
  "descripcion" text,
  "mascota_id" int,
  "lugar" varchar(50),
  "fecha_creac" datetime,
  "fecha_modif" datetime
);

ALTER TABLE "MASCOTAS" ADD FOREIGN KEY ("raza_id") REFERENCES "RAZAS" ("id");

ALTER TABLE "MASCOTAS" ADD FOREIGN KEY ("contacto_id") REFERENCES "CONTACTOS" ("id");

ALTER TABLE "PUBLICACIONES" ADD FOREIGN KEY ("mascota_id") REFERENCES "MASCOTAS" ("id");
