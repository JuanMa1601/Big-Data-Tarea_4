//Contar el número total de pacientes
db.pacientes.countDocuments()
//Resultado: número total de documentos en la colección pacientes.
________________________________________
//Contar el número de pacientes por sexo (M o F)
db.pacientes.aggregate([
  {
    $group: {
      _id: "$sexo",
      total_pacientes: { $sum: 1 }
    }
  }
])
//Agrupa por sexo y cuenta cuántos pacientes hay en cada grupo.
________________________________________
//Contar el número de pacientes por ciudad (campo dirección)
db.pacientes.aggregate([
  {
    $group: {
      _id: "$direccion",
      total_pacientes: { $sum: 1 }
    }
  }
])
//Agrupa por dirección completa 
________________________________________
//Contar cuántos pacientes tienen cada diagnóstico (dentro de visitas médicas)
db.pacientes.aggregate([
  { $unwind: "$visitas_medicas" }, // Desenrollar el array de visitas
  { $group: { _id: "$visitas_medicas.diagnostico", total_diagnosticos: { $sum: 1 } } },
  { $sort: { total_diagnosticos: -1 } } // Orden descendente
])
//Lista todos los diagnósticos realizados y cuántas veces se han registrado.
________________________________________
//Sumar total de visitas médicas registradas
db.pacientes.aggregate([
  { $project: { cantidad_visitas: { $size: "$visitas_medicas" } } },
  { $group: { _id: null, total_visitas: { $sum: "$cantidad_visitas" } } }
])
//Devuelve el total de todas las visitas médicas sumadas de todos los pacientes.
________________________________________
//Encontrar pacientes con mayor número de antecedentes médicos
db.pacientes.aggregate([
  {
    $project: {
      nombre: 1,
      numero_antecedentes: { $size: "$antecedentes_medicos" }
    }
  },
  {
    $sort: { numero_antecedentes: -1 }
  },
  { 
    $limit: 5 
  }
])
//Muestra el Top 5 de pacientes con más antecedentes médicos registrados.
