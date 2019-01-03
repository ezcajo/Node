//Simula ser una base de datos con empleados y salarios

let empleados=[{
	id:1,
	nombre:'Marcelo'
},{
	id:2,
	nombre:'Silvia'
},{
	id: 3,
	nombre: 'Lautaro'
}];

let salarios = [{
	id:1,
	salario:1000
},{
	id:1,
	salario:2000
}];

//funcion que busca empleados por id
let getEmpleadoById = (id, callbacks) => {
	let empleadoDb = empleados.find(empleados => {
		return empleados.id === id;
	});
	console.log(empleadoDb);
};
getEmpleadoById(10);