import mongoose from "mongoose";
import { MONGODB_CNX_STR } from "../src/config/mongodb.config.js";
import { propietariosManager } from "../src/services/propietarios.manager.js";
import { propiedadesManager } from "../src/services/propiedades.manager.js";

await mongoose.connect(MONGODB_CNX_STR);

//TESTEO
await propietariosManager.registrar({
  nombre: "luis",
  telefono: "1234567",
  email: "luis@gmail.com",
});

console.log(await propietariosManager.consultar());

await propiedadesManager.registrar({
  direccion: "aca 123",
  cantAmbientes: 4,
});

console.log(await propiedadesManager.consultar());
