use historial_medico;

// Inserción de un paciente de prueba
db.pacientes.insertOne({
  "nombre": "Laura Castillo",
  "documento_id": "987654321",
  "fecha_nacimiento": "1990-05-12",
  "sexo": "F",
  "direccion": "Carrera 12 #34-56, Cali",
  "telefono": "+57 3156547890",
  "email": "laura.castillo@email.com",
  "antecedentes_medicos": ["Asma"],
  "visitas_medicas": [
    {
      "fecha_visita": "2024-03-15",
      "motivo": "Consulta de control",
      "diagnostico": "Asma controlada",
      "tratamientos": ["Salbutamol inhalador"],
      "medico": "Dr. Andrés Rodríguez"
    }
  ]
});
________________________________________
//***Consulta de Selección:***//

//Seleccionar todos los pacientes (find)
db.pacientes.find().pretty()
//Este código muestra todos los documentos de la colección pacientes, formateados de manera ordenada.

//Buscar por nombre específico
db.pacientes.find({ "nombre": "Laura Castillo" }).pretty()

//Buscar pacientes con antecedentes médicos específicos
db.pacientes.find({ "antecedentes_medicos": "Asma" }).pretty()
//Busca cualquier paciente que tenga "Asma" dentro de su lista de antecedentes.
________________________________________
//***Consulta de Actualización.***//

//Actualizar el número de teléfono de un paciente
db.pacientes.updateOne(
  { "documento_id": "987654321" }, 
  { $set: { "telefono": "+57 3209876543" } }
)
//Cambia el teléfono de Laura Castillo al nuevo número.

//Agregar un nuevo antecedente médico al array
db.pacientes.updateOne(
  { "nombre": "Laura Castillo" },
  { $push: { "antecedentes_medicos": "Diabetes tipo 2" } }
)
//Añade "Diabetes tipo 2" a la lista de antecedentes médicos de Laura.
________________________________________
//Consulta de Eliminación.
//Eliminar un paciente por documento_id
db.pacientes.deleteOne({ "documento_id": "987654321" })
//Elimina de la colección el paciente cuyo documento_id sea 987654321.

