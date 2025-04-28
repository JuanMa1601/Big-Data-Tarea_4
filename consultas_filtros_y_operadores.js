//Buscar pacientes que tengan "Hipertensión" como antecedente
//Uso de $in para buscar en arreglos:
db.pacientes.find({ "antecedentes_medicos": { $in: ["Hipertensión"] } }).pretty()
//Muestra los pacientes que tengan "Hipertensión" en su historial médico.
________________________________________
//Buscar pacientes que sean de sexo femenino
db.pacientes.find({ "sexo": "F" }).pretty()
//Lista todas las pacientes mujeres.
________________________________________
//Buscar pacientes nacidos antes del año 1980 (mayores de 44 años aproximadamente)
//Uso de operador $lt (menor que):
db.pacientes.find({ "fecha_nacimiento": { $lt: "1980-01-01" } }).pretty()
//Muestra pacientes nacidos antes de 1980.
