# Inmobiliaria

- propiedades (venta / alquiler)
- clientes (propietarios / inquilinos)

V1: solo ingreso de propiedades

- propiedades (venta / alquiler)
  id : String
  idPropietario: String // id de propietario
  direccion: String
  cantAmbientes: Number

- propietarios (propietarios)
  id: String
  nombre: String
  telefono: String
  email: String
  propiedades: [ String ] // ids de propiedades

CRUD //operaciones que suceden o casos de uso:

- registrar un propietario
- Cargar una propiedad a un propietario
- listar a los propietarios
- listar a sus propiedades
